const db = require("../database/connection");

async function select(user_id, game_id = null) {
  const client = await db.connect();
  let where = ` user_id = '${user_id}' `;

  if(game_id) {
    where += ` and game_id = '${game_id}' `
  }

  const res = await client.query(`SELECT * FROM games where ${where}`);
  await client.end();
  return res.rows;
}

async function selectByGameID(user_id, game_id) {
  const client = await db.connect();
  const res = await client.query(`SELECT * FROM games where user_id = '${user_id}' and game_id = '${game_id}'`);
  await client.end();
  return res.rows;
}

async function insert(data) {
  const client = await db.connect();
  const sql = 'INSERT INTO games(current_status, game_id, user_id) VALUES ($1,$2,$3);';
  const values = [data.current_status, data.game_id, data.user_id];
  const insertReturn = await client.query(sql, values);
  await client.end();
  return insertReturn;
}

async function deleteGame(data) {
  const client = await db.connect();
  const sql = 'Delete from games where game_id = $1 and user_id = $2;';
  const values = [data.game_id, data.user_id];
  const insertReturn = await client.query(sql, values);
  await client.end();
  return insertReturn;
}

module.exports = { select, insert, selectByGameID, deleteGame }