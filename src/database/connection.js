async function connect() {
  try {
    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://hqkcypqt:fCgNnBjuXupj4H7zXIVkMZdbMODTUlMN@tuffi.db.elephantsql.com/hqkcypqt'
    });

    return pool.connect();
  } catch (error) {
    console.log('error')
  }
  
}

module.exports = { connect }