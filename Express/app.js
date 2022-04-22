var express = require('express')
// var bodyParser = require('body-parser')
// var indexRouter = require(__dirname + '/routers/index.js')
// var session = require('express-session')

var app = express()

// app.use('/public/', express.static('./public/'))
// app.use('/node_modules/', express.static('./node_modules/'))
// app.engine('html', require('express-art-template'))

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//     extended: false
// }))
// // parse application/json
// app.use(bodyParser.json())

// app.use(session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true
// }))

app.use(indexRouter)



app.listen(3000, function () {
    console.log('app is running');
})