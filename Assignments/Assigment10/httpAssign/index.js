var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var url = req.url;
	if(url ==='/page=1') {
        route('page1.html')
	}
	else if(url ==='/page=2') {
        route('page2.html')
	}
	else if(url ==='/page=3') {
        route('page3.html')
	}
    else{
        res.write('<h1>You are in the homepage.</h1>');
        res.end();
    }
}).listen(3000, function() {
	console.log("server start at port 3000");
});

function route(filename){
    fs.readFile(filename, function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
}