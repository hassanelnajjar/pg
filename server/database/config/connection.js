// Add code below to connect to your database
require('env2')('server/config.env');
const {Pool} = require('pg');

if(!process.env.DB_URL) throw new Error('No Connection ...')

const {hostname,username,password,port,pathname} = new URL(process.env.DB_URL);

const options = {
  connectionTimeoutMillis: 10000,
  host:hostname,
  user:username,
  password,
  port,
  max:process.env.DB_MAX_CONNECTIONS || 2,
  database:pathname.split('/')[1],
  ssl:hostname !== 'localhost'
}

module.exports =  new Pool(options);



