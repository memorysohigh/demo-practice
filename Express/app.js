var express = require('express')
var router = require('./routers/router')
var MySQL = require('./MySQL/mysql')
var bodyParser = require('body-parser')
var multer = require('multer')
var upload = multer({
    dest: 'uploads/'
})
var session = require('express-session')

var app = express()
// app.use('/public/', express.static('./public/'))
// app.use('/node_modules/', express.static('./node_modules/'))
// app.engine('html', require('express-art-template'))

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//     extended: false
// }))
// // parse application/json
// app.use(bodyParser.json())
app.use('/public', express.static(__dirname + '/views'))
app.use(bodyParser())

app.use(router)


app.get('/user/:id', function (req, res) {
    console.log(req.params.id);
    res.send('user ' + req.params.id);
});

app.post('/body/:id/:p?', function (req, res, next) {
    // console.log(req.body, req.params, req.query);
    // console.log(req.route);
    console.log(req.path);
    res.status(200)
    // res.cookie('name1', 'tob1i', {
    //     domain: 'local',
    //     path: '/admin',
    //     secure: true
    // });
    res.cookie('rememberme', '1', {
        expires: new Date(Date.now() + 900000),
        httpOnly: true
    });
    res.set('Content-Type', 'text/plain');
    console.log(res.get('Content-Type'));
    res.location(req.url)
    res.download('/file.png', 'asd.png');
    // res.redirect('/public/index.html')
    // res.redirect('back')
    res.send('body' + JSON.stringify(req.query))
})

app.post('/profile', upload.single('uploaded_file'), function (req, res, next) {
    console.log(req.file); //是 `avatar` 文件
    // req.body 对象中是表单中提交的文本字段(如果有)
    res.send('123456')
})

app.post('/upload', upload.array(), function (req, res) {
    console.dir(upload.array);
    console.log(req.file);
    res.send('上传成功')
})

app.get('/query', function (req, res) {
    console.log(req.query);
    app.set('login', 996)
    console.log(app.get('login'));
    res.send('user ' + req.query.id);
    // 数据库操作
    // console.log(typeof (MySQL))
    const sql = "select * from stu where stuname=?";
    MySQL.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(data);
        connection.destroy(); //释放资源
    })
});


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))




app.listen(3000, function () {
    console.log('app is running');
})