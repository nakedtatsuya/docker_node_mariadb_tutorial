"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const mysql_1 = __importDefault(require("mysql"));
const connection = mysql_1.default.createConnection({
    host: '172.25.0.2',
    user: process.env.MYSQL_USER,
    database: process.env.MYSQL_DATABASE,
    password: process.env.MYSQL_ROOT_PASSWORD,
});
const PORT = process.env.PORT || 8080;
app.get('/', (req, res) => {
    connection.query('SELECT * FROM users', function (err, results, fields) {
        console.log(results); // results contains rows returned by server'
        let testdb = 'not db';
        if (results && results.length > 0) {
            testdb = results[0].name;
        }
        res.send(`
							<h1>Docker + Node</h1>
							<span>Ass match made in the cloud name is ${testdb}</span>
					`);
    });
});
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
//# sourceMappingURL=app.js.map