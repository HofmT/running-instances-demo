//Modules Importation
var express = require('express');
var app = express();

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

app.listen(port, function () {
  console.log('App listening on port ' + port);
})