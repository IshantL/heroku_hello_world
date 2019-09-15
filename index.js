var express = require('express');
var npmRun = require('npm-run');
var app = express();
var PORT = process.env.PORT || 3000;
var output = null;

app.get('/',  async function(request, response){
    var result = await runNpmShow();
    response.send(result);
})

app.get('/message', function(request, response){
    console.log(request.query.message)
    var message = request.query.message;
    response.send(message);
})


app.listen(PORT, function(){
    console.log('Server is Started at', PORT)
})


function runNpmShow() {

      return new Promise((resolve) => {
        npmRun.exec(`npm show redux versions`, (err, stdout) => {
          if (!err) {
            const depVersionsList = JSON.parse(stdout.replace(/'/g, '"'));
            resolve(depVersionsList);
          } else {
            console.error(`Could not fetch version info for: Skip.`);
            resolve(err);
          }
        });
      });
    
  };


