var http = require('http');
var fs = require('fs');

var port = 9090;
var server = http.createServer(function(req, res) {
    console.log('Received request for:'+ req.url);
    
    if(req.url === '/') {
        req.url = '/index.html';
    }

    //dirname: 현재 경로(상수)
    //비동기라 callback function 필요 -> 파일을 전부 읽은 후 함수 실행(물론 동기로 파일 읽는 것도 존재)
    //callback function(error, data) 파라미터 format 존재
    //ex02/public/index.html -> __dirname + '/public/index.html'
    fs.readFile(__dirname + '/public' + req.url, function(err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.end(data); //body content
    }); 
});

server.listen(port, function() {
    console.log('Server running at http://localhost:' + port);
});