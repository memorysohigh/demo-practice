var http = require("http");
var url = require("url");
var fs = require('fs')
var path = require('path')

function start() {
    async function onRequest(request, response) {

        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        switch (pathname) {
            case '/': {
                // fs.readFile(__dirname + '/package-lock.json', (error, data) => {
                //     console.log(data);
                //     let a = Buffer.from(data)
                //     response.end(a.toString());
                // })
                let stream = fs.createReadStream(__dirname + '/package-lock.json')
                let a
                stream.pipe(response)
                break;
            }
            case '/a': {
                response.writeHead(200, {
                    "Content-Type": "text/plain"
                });
                response.write("a");
                response.end()
                break
            }
            case '/b': {
                response.writeHead(200, {
                    "Content-Type": "text/plain"
                });
                response.write("b");
                response.end()
                break
            }
            default: {
                response.writeHead(404, {
                    "Content-Type": "text/plain"
                });
                response.write("not found");
                response.end()
                break;
            }
        }
        // response.end('123');
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
start()

exports.start = start;