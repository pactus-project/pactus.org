import sys
import os
import glob
import yaml


def load_yaml_as_dic(file_path):
    print(f"Opening file: {file_path}")
    my_dict = {}
    with open(file_path, 'r', encoding='utf-8') as fp:
        docs = yaml.safe_load_all(fp)
        for doc in docs:
            for key, value in doc.items():
                my_dict[key] = value
    return my_dict


def recursive_keys(data, keys, prefix):
    if isinstance(data, dict):
        for key, value in data.items():
            if isinstance(value, dict):
                recursive_keys(value, keys, key)
            else:
                keys.append(prefix + "/" + key)
    return keys


def compare_keys(translations):
    first_keys = None
    for file_data in translations:
        keys = []
        recursive_keys(file_data, keys, "")
        keys.sort()
        # print(keys)
        if first_keys is None:
            first_keys = keys
        elif keys != first_keys:
            return False
    return True


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python check_translation_keys.py /path/to/folder")
        sys.exit(1)

    folder_path = sys.argv[1]
    yaml_files = glob.glob(os.path.join(folder_path, "*.yml"))

    if not yaml_files:
        print(f"No YAML files found in {folder_path}")
        sys.exit(1)

    translations = [load_yaml_as_dic(file) for file in yaml_files]
    if compare_keys(translations):
        print("All YAML files in the folder have the exact same keys.")
    else:
        print("Not all YAML files in the folder have the exact same keys.")
        sys.exit(1)
