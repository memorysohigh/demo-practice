var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
    res.send(__dirname + '/../views/index.html')
    next()
})

router.get('/submit', function (req, res) {
    res.render('submit.html', {})
})

router.get('/about', function (req, res) {
    res.send('你好 我是 express！')
})

var contents = []

router.post('/b', function (req, res) {
    // res.send('你好 我是 express！')
    var content = req.body
    console.log(req.body);
    content.dataTime = '2017-11-05'
    contents.unshift(content)
    req.session.cookie = {}
    res.send(req.session)
    console.log(req.session);
    // res.redirect('/')
})
console.log(module.exports === exports)
exports.a = 123
console.log(module.exports === exports)

module.exports = router