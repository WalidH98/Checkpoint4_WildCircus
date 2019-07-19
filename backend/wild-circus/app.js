var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

var indexRouter = require('./routes/index');

var productRouter = require('./routes/products');

var cartRouter = require('./routes/carts');


var app = express();

app.use(logger('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use('/Api/v1/products', productRouter);

app.use('/Api/v1/carts', cartRouter);


module.exports = app