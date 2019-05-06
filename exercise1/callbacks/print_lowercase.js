var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};


function printHTMLLower (html) {
  console.log(html.toLowerCase());
}


getHTML(requestOptions, printHTMLLower);