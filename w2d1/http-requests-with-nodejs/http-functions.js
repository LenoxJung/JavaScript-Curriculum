var https = require('https');
module.exports = (options, callback) => {
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
