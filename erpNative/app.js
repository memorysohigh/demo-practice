var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var proxy = require('express-http-proxy');
var http = require('http')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




// 配置代理 /
let proxyConfig = {
  URL: '192.168.1.59',
  PORT: '8885'
}
// 访问 http://localhost:3000/hbapi 会转为  http://xx.xx.xx.xx:3000 请求
app.use('/', proxy(
  'http://' + proxyConfig.URL + ':' + proxyConfig.PORT, {
    proxyReqPathResolver: function (req) {
      console.log(`请求的路径：${req.url}`); //请求的路径：/article/list
      console.log(`转发的路径：${req.url.split('api')[1]}`);
      return `${req.url.split('api')[1]}` //转发请求路径： /article/list?token=123456
    }
  },
));

app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;