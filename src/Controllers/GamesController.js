module.exports = {
  async getGamesByUser(request, response) {
    if(!request.params.id){
      return response.status(400).send('Invalid user id')
    }

    let gameId = null;

    if(request.params.game_id){
      gameId = request.params.game_id;
    }

    var id = request.params.id;
    const gamesModel = require("../models/games");
    let games = await gamesModel.select(id, gameId);

    return response.json(games);
  },
  async createGame(request, response) {
    if(!request.body.user_id){
      return response.status(400).send('Invalid user_id')
    }

    if(!request.body.game_id){
      return response.status(400).send('Invalid game_id')
    }
   
    const gamesModel = require("../models/games");
    existGame = await gamesModel.selectByGameID(request.body.user_id, request.body.game_id);

    if(existGame.length > 0) {
      return response.status(400).send('Game already inserted')
    }

    game = await gamesModel.insert(request.body);

    if(game.row_count == 0) {
      response.status(500).send('Error');
    }

    return response.status(200).send('Success');
  },
  async deleteGame(request, response) {
    if(!request.body.user_id){
      return response.status(400).send('Invalid user_id')
    }

    if(!request.body.game_id){
      return response.status(400).send('Invalid game_id')
    }
   
    const gamesModel = require("../models/games");
    existGame = await gamesModel.selectByGameID(request.body.user_id, request.body.game_id);

    if(existGame.length == 0) {
      return response.status(400).send('Game not inserted')
    }

    game = await gamesModel.deleteGame(request.body);

    if(game.row_count == 0) {
      response.status(500).send('Error');
    }

    return response.status(200).send('Success');
  },
};