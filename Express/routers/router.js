var express = require('express')
var router = express.Router()


router.get('/', function (req, res) {
    res.render('index.html', {
        tittle: '模板123456引擎'
    })
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
    res.send('123456')
    // res.redirect('/')
})

module.exports = router