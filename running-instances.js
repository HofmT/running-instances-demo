//Modules Importation
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var fibonacci = require('./fibonacci.js');

//process.env.PORT is needed for the Cloud environment - 8878 is for localhost
var port=process.env.PORT || 8878;

//Return index.html
app.use(express.static(__dirname));

//url which returns the Environment variables in JSON Format
app.get('/data.json', function(req, res){

    var instancePort = process.env['PORT'];
    var appName = process.env['STACKATO_APP_NAME'];
    var instanceIndex = process.env['CF_INSTANCE_INDEX'];

    var environmentVariables = {
        "CF_INSTANCE_INDEX": instanceIndex,
        "STACKATO_APP_NAME": appName,
        "PORT": instancePort
    }


    JSON.stringify(environmentVariables);
    res.send(environmentVariables);
    return;
});


io.on('connection', function (socket) {
  
  socket.on('produceLoad', function () {
    console.log('Calculating the 42nd fibonacci number...');
    console.log(fibonacci(42));
  });
});

server.listen(port);
console.log('server ready');