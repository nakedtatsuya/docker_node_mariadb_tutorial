"use strict";
var express = require("express");
var app = express();
var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: '172.25.0.2',
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_ROOT_PASSWORD,
});
var PORT = process.env.PORT || 8080;
app.get("/", function (req, res) {
    connection.query('SELECT * FROM users', function (err, results, fields) {
        console.log(results); // results contains rows returned by server'
        var testdb = "not db";
        if (results && results.length > 0) {
            testdb = results[0].name;
        }
        res.send("\n\t\t\t\t\t\t\t\t<h1>Docker + Node</h1>\n\t\t\t\t\t\t\t\t<span>A match made in the cloud name is " + testdb + "</span>\n\t\t\t\t\t\t");
    });
});
app.listen(PORT, function () {
    console.log("Server listening on port " + PORT + "...");
});
