var http = require("http");
var url = require("url");

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        switch (pathname) {
            case '/': {
                response.writeHead(200, {
                    "Content-Type": "text/plain"
                });
                response.write("Hello World");
                break;
            }
            case '/a': {
                response.writeHead(200, {
                    "Content-Type": "text/plain"
                });
                response.write("a");
                break
            }
            case '/b': {
                response.writeHead(200, {
                    "Content-Type": "text/plain"
                });
                response.write("b");
                break
            }
            default: {
                response.writeHead(404, {
                    "Content-Type": "text/plain"
                });
                response.write("not found");
                break;
            }
        }
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}
start()

exports.start = start;