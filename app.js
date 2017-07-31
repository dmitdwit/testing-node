var http    = require ('http');
var url     = require ('url');
var fs      = require ('fs');

http.createServer(function (request,response) {
    if(request.method === 'GET' && url.parse(request.url).pathname === "/"){
        response.writeHead(302,{
            'Location' : '/login'
        });
        response.end();
    }else if(request.method === 'GET' && url.parse(request.url).pathname === "/login"){
        response.writeHead(200,{'Content-Type' : 'text/html'});
        fs.createReadStream('./view/login.html','utf8').pipe(response);
    }else{
        response.writeHead(404,{
            'Content-Type' : 'text/plain'
        });
        response.end("404 Not Found !!")
    }
}).listen(2323);

console.log("Server is running...");

