var express = require('express')


var app = express()
var contents = []

app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static('./node_modules/'))
app.engine('html', require('express-art-template'))


app.get('/', function (req, res) {
    res.render('index.html', {
        tittle: '模板123456引擎'
    })
})


app.get('/about', function (req, res) {
    res.send('你好 我是 express！')
})

app.post('/b', function (req, res) {
    // res.send('你好 我是 express！')
    var content = req
    console.log(req);
    // content.dataTime = '2017-11-05'
    // contents.unshift(content)
    // console.log(req.query)
    // res.redirect('/')
})


app.listen(3000, function () {
    console.log('app is running');
})