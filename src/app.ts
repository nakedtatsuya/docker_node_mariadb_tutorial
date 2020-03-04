const express = require("express");
const app = express();
const mysql = require('mysql2');

const connection = mysql.createConnection({
		host: '172.25.0.2',
		user: process.env.MYSQL_USER,
		database: process.env.MYSQL_DATABASE,
		password: process.env.MYSQL_ROOT_PASSWORD,
});

const PORT = process.env.PORT || 8080;

app.get("/", (req: any, res: any) => {
	connection.query(
			'SELECT * FROM users',
			function(err: any, results: any, fields: any) {
					console.log(results); // results contains rows returned by server'
					let testdb = "not db";
					if(results && results.length > 0) {
							testdb = results[0].name
					}
					res.send(`
							<h1>Docker + Node</h1>
							<span>A match made in the cloud name is ${testdb}</span>
					`);
			}
	);

});

app.listen(PORT, () => {
		console.log(`Server listening on port ${PORT}...`);
});
