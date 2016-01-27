// var server = require('http').createServer();

// server.listen(52273, function(){
// 	console.log('Server Running at http://127.0.0.1:52273');
// 	process.argv.forEach(function(item, index){
// 		console.log(index + " : " + item);
// 	});
// });

// setInterval(function(){
// 	server.close();
// }, 10000);

var http = require('http');

var server = http.createServer();

server.on('request', function(){
	console.log('Request On');
});


server.on('connection', function(){
	console.log('Connection On');
});

server.on('close', function(){
	console.log('Close On');
});




server( function(request, response){
	response.end('hello');
}).listen(52273);

