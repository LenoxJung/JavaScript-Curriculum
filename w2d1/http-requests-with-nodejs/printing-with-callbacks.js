var https = require('https');
const getHTML = (options, callback) => {
  https.get(options, (response) => {
    var html = "";
    response.setEncoding('utf8');
    response.on('data', (data) => {
      html += data;
    });
    response.on('end', () => {
      callback(html);
    });
  });
}

const printHTML = (html) => {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
}

getHTML(requestOptions, printHTML);
