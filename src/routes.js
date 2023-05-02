const express = require('express');

const UserController = require('./Controllers/UserController');
const GamesController = require('./Controllers/GamesController');

const routes = express.Router();

routes.post('/user', UserController.loginOrCreate);
routes.get('/games/:id', GamesController.getGamesByUser);
routes.post('/games', GamesController.createGame);

module.exports = routes;