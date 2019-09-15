var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.get('/', function(request, response){
    response.send("Hello World !!!");
})

app.get('/message', function(request, response){
    console.log(request.params.message)
    var message = request.params.message;
    response.send(request);
})


app.listen(PORT, function(){
    console.log('Server is Started at', PORT)
})