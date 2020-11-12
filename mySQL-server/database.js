// to use mySQL we first 'require' the mysql module:
const mysql = require('mysql');

// define parameters for connection and specify which database to use for queries: 
parameters = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "nusmoney",
}

// define connection:
connection = mysql.createConnection(parameters);

// and then connect to the server:
connection.connect(function (err, result) {
    if (err) {
        // if you get any error, display the error
        console.log(err);
    } else { 
        console.log("connection successful");
    }
});

module.exports = connection;
