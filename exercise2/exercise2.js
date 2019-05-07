var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function(err){
         throw err;
       })
       .on('response', function(response){
         console.log(response.statusCode);
         console.log(response.statusMessage);
         console.log(response.headers['content-type']);
         console.log("downloading image...");
       })
       .on('end', function(end){
         console.log('download complete.');
       })

       .pipe(fs.createWriteStream('./future.jpg').on('finish',function(finish){console.log('final complete!!')}));

