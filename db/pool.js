const { Pool } = require('pg');

module.exports = new Pool({
  host: process.env.PGHOSTNAME, 
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT 
}) 
