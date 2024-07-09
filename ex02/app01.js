var http = requrie('http');

var port = 9090;
var server = http.createServer(function(req, resp) {
    resp.writeHead(200 {
        'Content-Type': 'text/html'
    });
    resp.end()

});