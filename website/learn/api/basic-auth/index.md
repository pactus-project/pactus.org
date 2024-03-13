---
layout: learn
title: How to secure gRPC using basic authentication?
sidebar: gRPC Basic Authentication
---

<h1 id="title">How to secure gRPC using basic authentication?</h1>

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
  <label for="username">Username:</label><br />
  <input type="text" id="username" name="username" /><br />
  <label for="password">Password:</label><br />
  <input type="password" id="password" name="password" /><br /><br />
  <button type="button" onclick="generateHtpasswd()">
    Generate
  </button>
<br>
<br>

  <p id="output"></p>
</form>
<div id="output"></div>
