var https = require('https');

function getHTML (options, callback) {

  https.get(options, function (response) {
  var result = "";
  response.setEncoding('utf8');

  response.on('data', function(chunk){
    result += chunk;
  });
  response.on('end', function() {
    callback(result);
    console.log('Response stream complete.');

  });
});

}

function printHTML (html) {
  console.log(html);
}

// var requestOptions = {
//   host: 'sytantris.github.io',
//   path: '/http-examples/step4.html'
// };


getHTML({ host: 'sytantris.github.io',
                  path: '/http-examples/step3.html'},
                  printHTML);
