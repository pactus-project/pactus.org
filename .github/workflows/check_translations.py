import sys
import os
import glob
import yaml


def load_yaml(file_path):
    print(f"Opening file: {file_path}")
    with open(file_path, 'r', encoding='utf-8') as file:
        return yaml.safe_load(file)


def compare_keys(files):
    keys_set = None
    for file_data in files:
        keys = set(file_data.keys())
        if keys_set is None:
            keys_set = keys
        elif keys != keys_set:
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

    translation_files = [load_yaml(file) for file in yaml_files]

    if compare_keys(translation_files):
        print("All YAML files in the folder have the exact same keys.")
    else:
        print("Not all YAML files in the folder have the exact same keys.")
        sys.exit(1)
