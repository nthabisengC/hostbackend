const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();


const pool = new Pool({
  connectionString: "postgres://dbstrapi_n7hi_user:o2NX7b1ZMUHKayMFvnOTSMdFSJAzqrCI@dpg-cho5nnhmbg50piof4tdg-a.oregon-postgres.render.com/dbstrapi_n7hi?ssl=true"
  
});

pool.on('connect', () => {
  console.log('Database connected successfuly!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};