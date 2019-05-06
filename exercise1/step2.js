var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function (response) {
  var result = "";
  response.setEncoding('utf8');

  response.on('data', function(chunk){
    result += chunk;
  });
  response.on('end', function() {
    console.log(result);
    console.log('Response stream complete.');
  });
});
}







getAndPrintHTML();
