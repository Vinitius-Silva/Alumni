const API_URL = require('./config.js');
const axios = require('axios');
var token;

async function getUser() {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

async function getUserOne(username, password) {
  await axios.post(API_URL+'usuarios/login', {
      username: username,
      password: password,
  })
  .then(function (response) {
    token = response.data;
    console.log(token);
  })
  .catch(function (error) {
    console.error(error);
  })
  .then(function () {
    // sempre será executado
  });  
  }
 
 getUserOne();  

 module.exports= {token, getUserOne};