'use strict'
const express = require('express');
const UserController = require('../controllers/users.controllers');
const api = express.Router();

api.get('/', function(){
  console.log("Users request");
});
module.exports = api;
