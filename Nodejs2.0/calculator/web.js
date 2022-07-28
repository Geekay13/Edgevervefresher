var http = require('http');
http.createServer((function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
res.write("hai this is ganesh");
res.end("end");
})).listen(2020);