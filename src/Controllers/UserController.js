module.exports = {
  async loginOrCreate(request, response) {
    if(!request.body.email){
      return response.status(400).send('Invalid email')
    }

    if(!request.body.id){
      return response.status(400).send('Invalid id')
    }
   
    const usersModel = require("../models/users");
    let user = await usersModel.select(request.body.id);

    let user_response = {
      google_data: request.body,
      database_data: null
    }

    if(user.length > 0) {
      user_response.database_data = user[0]
      return response.status(200).send(user_response)
    }

    const new_user = await usersModel.insert({
      id_google: request.body.id,
      email: request.body.email,
      name: request.body.name
    });

    if(new_user.row_count == 0) {
      return response.status(500).send('Cant create a user now')
    }

    user = await usersModel.select(request.body.id);
    user_response.database_data = user[0]

    return response.json(user_response);
  },
};