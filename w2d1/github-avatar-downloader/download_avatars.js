var getRepoContributors = require('./get-repo-contributors.js')
var request = require('request');
var fs = require('fs');

console.log("Welcome to the GitHub Avatar Downloader!");

getRepoContributors(process.argv[2], process.argv[3], function (err, result) {
  console.log("Errors:", err);
  console.log("Result: ");
  result.forEach((user) => {
    console.log(user.avatar_url);
    downloadImageByURL(user.avatar_url, "avatars/" + user.login + ".jpg");
  });
});

const downloadImageByURL = (url, filePath) => {
  if (!fs.existsSync("avatars")) fs.mkdir("avatars");
  request.get(url).pipe(fs.createWriteStream(filePath));
}
