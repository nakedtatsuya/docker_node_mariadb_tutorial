import express from 'express';
import path from 'path';

import indexRouter, {BLOGS, ADMIN, INDEX} from './routes';
import blogsRouter from './routes/blogs';
import adminRouter from './routes/admin';
import connection from './db/mariadb';

const app = express();

app.set('view engine', 'ejs');
app.set('views', process.cwd() + '/src/views');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(process.cwd() + '/src/public'));
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  connection.query('SELECT * FROM users', (err, results, fields) => {
    console.log(results);
    res.render('index', {path: __dirname});
  });
});

app.get(INDEX, indexRouter);
app.use(BLOGS, blogsRouter);
app.use(ADMIN, adminRouter);



app.listen(PORT, () => {
  console.log(`sServer listensing sons port ${PORT}...`);
});
