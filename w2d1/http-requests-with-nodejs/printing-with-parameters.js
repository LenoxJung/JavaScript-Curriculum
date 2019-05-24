var https = require('https');
function getAndPrintHTML (host, path) {
  var options = host + path;
  https.get(options, function (response) {
    var html = "";
    response.setEncoding('utf8');
    response.on('data', function (data) {
      html += data;
    });
    response.on('end', function() {
      console.log(html);
    });
  });
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
}

var url = "https://sytantris.github.io/http-examples/step3.html"

var host = "https://sytantris.github.io";

var path = "/http-examples/step3.html";

getAndPrintHTML(host, path);
