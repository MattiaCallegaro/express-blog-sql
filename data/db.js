require('dotenv').config();

//importo mysql2
const mysql = require("mysql2");

//creo una variabile per la connessione al database
//è un oggeto che ha bisogno di queste proprietà
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

//utilizzo la variabile per instaurare una connesione al database
connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL")
});

module.exports = connection