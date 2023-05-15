const express = require('express');

const UserController = require('./Controllers/UserController');
const GamesController = require('./Controllers/GamesController');

const routes = express.Router();

routes.post('/user', UserController.loginOrCreate);

routes.get('/games/:id', GamesController.getGamesByUser);
routes.get('/games/:id/:game_id', GamesController.getGamesByUser);
routes.post('/games/delete', GamesController.deleteGame);
routes.post('/games', GamesController.createGame);

module.exports = routes;