let http = require('http')
let path = require('path')
let url = require('url')

let staticServer = require('./staticServer')

let server = http.createServer()
server.on('request', function (req, res) {
    console.log(req)
    let rootPath = path.join(__dirname,'static',url.parse(req.url).pathname)
    staticServer(req,res,rootPath)
})
server.listen(3000)