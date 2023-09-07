require('@babel/register');
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const path = require('path');
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);
const ssr = require('./src/middleware/ssr');

// импорт Роутов
const indexRouter = require('./src/routes/indexRouter');
const userRouter = require('./src/routes/userRouter');

// server
const app = express();
const PORT = process.env.PORT || 5000;

// Cookies
const sessionConfig = {
  name: 'myapishop',
  store: new FileStore(),
  secret: process.env.SECRET_KEY_SESSION || 'myapishop',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

// middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession(sessionConfig));
app.use(express.json());
app.use(ssr);

// Ссылки на Router
app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
