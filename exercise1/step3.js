var https = require('https');


function getAndPrintHTML (options) {

  https.get(options, function (response) {
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

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step3.html'
// };


getAndPrintHTML({ host: 'sytantris.github.io',
                  path: '/http-examples/step3.html'});
