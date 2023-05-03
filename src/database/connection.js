async function connect() {
  try {
    //console.log('global connection', global.connection)
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://hqkcypqt:fCgNnBjuXupj4H7zXIVkMZdbMODTUlMN@tuffi.db.elephantsql.com/hqkcypqt'
    });

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
  } catch (error) {
    console.log('error')
  }
  
}

module.exports = { connect }