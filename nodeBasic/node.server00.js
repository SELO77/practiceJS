var http = require('http');

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end('<h1>Hello World ..!</h1>');
}).listen(52274, function(){
	console.log('Server running at http://127.0.0.1:52274/');
});

// writen on macvim by SELO
// thanks for comming ^^
