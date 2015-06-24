/**
 * Created by panew on 15-6-14.
 */
var config = require('./config');
var env = process.env.NODE_ENV;
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exhbs = require('express-handlebars');
var hbshelper = require('./service/hbshelpers');
var routers = require('./routers');
var app = express();

// view engine setup
app.engine('hbs', exhbs(hbshelper));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': true}));
app.use(cookieParser());

if (env === "development") {
  app.use(logger('dev'));
}


app.use(function (req, res, next) {
  res.locals.production = env === "production";
  next();
});

app.use('/', routers);

/// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  res.status(err.status);
  next(err);
});

/// error handlers


// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  var data = {layout: false};
  if (env === 'development') {
    data.message = err.message;
    data.error = err;
  }
  else {
    data.title = {
      404: '木有这个页面，orz',
      500: '伍佰来了，次奥'
    }[res.statusCode];
  }
  res.render('err', data);
});


module.exports = app;