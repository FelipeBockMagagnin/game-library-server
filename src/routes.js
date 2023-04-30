const express = require('express');

const UserController = require('./Controllers/UserController');

const routes = express.Router();

routes.post('/user', UserController.loginOrCreate);

module.exports = routes;