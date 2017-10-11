'use strict'
const express = require('express');
const UserController = require('../controllers/users.controller');
const api = express.Router();

api.get('/', UserController.pruebas);
module.exports = api;
