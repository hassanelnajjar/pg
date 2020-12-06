// Add code below to insert user info to your database
const dbConnection = require('../config/connection');

module.exports.postData = ({name,location})=> dbConnection.query(`insert into users(name,location) values('${name}','${location}');`)

