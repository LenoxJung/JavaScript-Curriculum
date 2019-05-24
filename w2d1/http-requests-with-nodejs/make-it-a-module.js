var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
}

const printHTML = (html) => {
  console.log(html);
}

getHTML(requestOptions, printHTML);
