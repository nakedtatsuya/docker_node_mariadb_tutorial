import mysql from 'mysql2';
const connection = mysql.createConnection({
  host: '172.25.0.2',
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_ROOT_PASSWORD,
});

export default connection;
