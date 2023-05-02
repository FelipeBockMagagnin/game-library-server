module.exports = {
  async getGamesByUser(request, response) {
    console.log(request)

    if(!request.params.id){
      return response.status(400).send('Invalid user id')
    }

    var id = request.params.id;
    const gamesModel = require("../models/games");
    let games = await gamesModel.select(id);

    return response.json(games);
  },
  async createGame(request, response) {
    console.log(request)

    if(!request.body.user_id){
      return response.status(400).send('Invalid user_id')
    }

    if(!request.body.game_id){
      return response.status(400).send('Invalid game_id')
    }

    if(!request.body.current_status){
      return response.status(400).send('Invalid current_status')
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
};