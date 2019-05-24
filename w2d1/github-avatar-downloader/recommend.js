var getRepoContributors = require('./get-repo-contributors.js')
var token = require('./secrets.js');
var request = require('request');

var list = {};
var count = [];

getRepoContributors(process.argv[2], process.argv[3], function (err, result) {
  result.forEach((user) => {
    addToList(user.starred_url.substring(0, user.starred_url.indexOf("{")) + "?per_page=100&page=", 1)
  });
});

var top = [];

const addToList = (url, page) => {
  var options = {
    url: url + page,
    headers: {
      'User-Agent': 'request',
      'Authorization': token.GITHUB_TOKEN
    }
  };
  request(options, (err, res, body) => {
    body = JSON.parse(body);
    body.forEach((repo) => {
      if (list[repo.full_name]) list[repo.full_name]++;
      else list[repo.full_name] = 1;
    });
    count.push(res);
    if (count.length > 43) {
      for (var repo in list)  {
        if (top.length < 5) {
          top.push({name: repo, value: list[repo]})
        }
        else {
          top.sort((a, b) => {
            return a.value - b.value;
          });
          if (list[repo] > top[0].value) {
            top[0] = {name: repo, value: list[repo]};
          }
        }
      }
      console.log(top);
    }
    if (body.length > 99) {
      addToList(url, page + 1);
    }
  });
}
