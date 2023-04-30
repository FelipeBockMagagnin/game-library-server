module.exports = {
  async loginOrCreate(request, response) {
    console.log(request)
    return response.json(request.body);
  },
};