const db = require("../database/connection");

async function select(user_id) {
  const client = await db.connect();
  const res = await client.query(`SELECT * FROM games where user_id = '${user_id}'`);
  return res.rows;
}

async function selectByGameID(user_id, game_id) {
  const client = await db.connect();
  const res = await client.query(`SELECT * FROM games where user_id = '${user_id}' and game_id = '${game_id}'`);
  return res.rows;
}

async function insert(data) {
  const client = await db.connect();
  const sql = 'INSERT INTO games(current_status, game_id, user_id) VALUES ($1,$2,$3);';
  const values = [data.current_status, data.game_id, data.user_id];
  return await client.query(sql, values);
}

module.exports = { select, insert, selectByGameID }