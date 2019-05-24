var request = require('request');
var token = require('./secrets.js');

const getRepoContributors = (repoOwner, repoName, callback) => {
  if (process.argv.length != 4) {
    console.log("Where the Owner and or Repo arguments at?")
    return;
  }
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors?per_page=35",
    headers: {
      'User-Agent': 'request',
      'Authorization': token.GITHUB_TOKEN
    }
  };

  request (options, function(err, res, body) {
    body = JSON.parse(body);
    if (body.message) {
      console.log(body.message);
      return;
    }
    callback(err, body);
  });
}

module.exports = getRepoContributors;
