const { Pool } = require('pg');

module.exports = new Pool({
  host: process.env.PGHOSTNAME, 
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGHOSTNAME,
  port: process.env.PGPORT 
}) 
