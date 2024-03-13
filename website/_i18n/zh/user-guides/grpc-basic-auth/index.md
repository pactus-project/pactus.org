---
version: 1
---

## Preface

The Pactus Blockchain offers a gRPC interface, enabling users to interact with both the blockchain 
and its native wallet. To enhance the security of gRPC APIs, we have implemented a Basic Authentication 
mechanism. This approach aims to provide a straightforward yet effective means for authenticating clients accessing the APIs.

**Note:** This mechanism secures gRPC, gRPC gateway, and HTTP communications.

## Generate Basic Auth

To enable basic authentication, you need to generate basic authentication credentials using an online tool or a predefined utility.

Example Format:

```
username: foo
password: bar

result: foo:$2a$10$nl6VKEzSENIK5dmzoADgKeTFtCusQxeVCZiXkRzzbyfG.bLpHtrda
```

### Generate With Online tool

To generate basic authentication credentials, you can use the following form to create a hashed credential.

<script src="https://cdnjs.cloudflare.com/ajax/libs/bcryptjs/2.4.3/bcrypt.min.js" integrity="sha512-DNI/FJdkfyeuPUal7lDkRVg0mFY2n4IZJJYqPbQWLL0COxLi6G6nmf5gr1vW1Bd4wYC09hOvZVsSclfXxUTU/w==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
      function generateHtpasswd() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var bcrypt = dcodeIO.bcrypt;
        // Generate salt
        var salt = bcrypt.genSaltSync(10);

        // Hash the password
        var hash = bcrypt.hashSync(password, salt);

        // Output the htpasswd format
        var htpasswd = username + ":" + hash;
        document.getElementById("output").innerHTML =
          "<pre>" + htpasswd + "</pre>";
      }
</script>

<form id="passwdForm">
  <label for="username">Username</label><br />
  <input type="text" id="username" name="username" /><br />
  <label for="password">Password</label><br />
  <input type="password" id="password" name="password" /><br /><br />
  <button type="button" onclick="generateHtpasswd()">
    Generate
  </button>
<br>
<br>
<p id="output">Result:</p>
</form>
<div id="output"></div>

### Generate by using htpasswd tool

Your instructions are clear and informative. I've made minor edits for clarity and consistency:

1. Install the `htpasswd` tool from [Apache](https://httpd.apache.org/docs/2.4/programs/htpasswd.html).
2. Use the `htpasswd` command-line tool to generate a bcrypt-hashed password. Here's the general syntax:

```shell
htpasswd -bnBC 10 <username> <password>
```

- `-b`: Use the command line to provide the password.
- `-n`: Output the hashed password to the console rather than updating a file.
- `-B`: Force the use of the bcrypt encryption algorithm.
- `-C cost`: Set the cost factor for the bcrypt algorithm. Higher values result in slower hashing but are more secure.
- `username`: The username for which you are generating the password.
- `password`: The password you wish to hash.

Example:

```shell
htpasswd -bnBC 10 javad mypassword
```

This process results in a bcrypt-hashed password that can be used for basic authentication.

## Enable Basic Auth in the Config

1. Open the `config.toml` file in your Pactus directory.

  - **Windows:** `C:\Users\{user}\pactus`
  - **Linux and Mac:** `/home/{user}/pactus`

2. Insert the generated user with the hashed password into the `basic_auth_credential` field in the config file.

```toml
[grpc]
  enable = true
  enable_wallet = false
  listen = "127.0.0.1:50051"
  basic_auth_credential = "foo:$2a$10$nl6VKEzSENIK5dmzoADgKeTFtCusQxeVCZiXkRzzbyfG.bLpHtrda"
```

3. Restart or run the node to apply this configuration.
