const mysql = require('mysql2');

require('dotenv').config();

const connect = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE    
});

connect.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

module.exports = connect;