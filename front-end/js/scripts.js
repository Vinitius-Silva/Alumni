const getUserOne = require('./index.js');

const user = document.getElementById("username").value;
const pass = document.getElementById("password").value;
 
 document.getElementById("btnLogin")
    .addEventListener("click", getUserOne(user, pass));
