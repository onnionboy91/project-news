require('@babel/register');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const indexRouter = require('./routes/index.routes');
const ssr = require('./middleware/ssr');
const { verifyAccessToken } = require('./middleware/verifyJWT');
const getUser = require('./middleware/getUser');

app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr);
app.use(verifyAccessToken);
app.use(getUser);

app.use('/', indexRouter);

const PORT = 4000;

app.listen(PORT, () => {
  console.log('Server started');
});
