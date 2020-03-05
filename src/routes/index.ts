export const BLOGS = '/blogs';
export const ADMIN = '/admin';
export const INDEX = '/';
import connection from '../db/mariadb';

import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM users', (err, results, fields) => {
    console.log(results);
    res.render('index', {path: __dirname});
  });
});

export default router;
