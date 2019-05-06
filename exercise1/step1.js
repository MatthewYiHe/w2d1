// while https is built-in to Node, it is a module, so it must be required
var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

https.get(requestOptions, function (response) {
  var result = "";
  response.setEncoding('utf8');

  response.on('data', function(chunk){
    result += chunk + '\n';
  });
  response.on('end', function() {
    console.log(result);
    console.log('Response stream complete.');
  });
});
}



getAndPrintHTMLChunks();