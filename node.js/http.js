let http = require('http')
let path = require('path')

let staticServer = require('./staticServer')

let server = http.createServer()
server.on('request', function (req, res) {
    let rootPath = path.join(__dirname,'static',req.url)
    staticServer(req,res,rootPath)
})
server.listen(3000)