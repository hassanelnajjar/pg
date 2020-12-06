// Add code below to get users info from your database
const dbConnection = require('../config/connection');

module.exports.getData = ()=> dbConnection.query('select * from users')