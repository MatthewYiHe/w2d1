var https = require('https');

module.exports = function getHTML (options, callback) {

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
};

function printHTML (html) {
  console.log(html);
}