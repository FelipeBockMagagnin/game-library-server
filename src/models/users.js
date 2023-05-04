const db = require("../database/connection");

async function select(id_google) {
  const client = await db.connect();
  const res = await client.query(`SELECT * FROM users where id_google = '${id_google}'`);
  await client.end();
  return res.rows;
}

async function insert(data) {
  const client = await db.connect();
  const sql = 'INSERT INTO users(id_google, email, name) VALUES ($1,$2,$3);';
  const values = [data.id_google, data.email, data.name];
  const query = await client.query(sql, values);
  await client.end();
  return query;
}

module.exports = { select, insert }