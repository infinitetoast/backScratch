const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('../server/routes');
// require('../db');
require('../db/user');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
}

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mount all routes on /api/v1 path
app.use('/api/v1', routes);

module.exports = app;
