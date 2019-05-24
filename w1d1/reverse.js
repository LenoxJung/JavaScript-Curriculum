var args = process.argv.slice(2);
for (var i = 0; i < args.length; i++) {
  var output = "";
  for (var j = args[i].length; j > 0; j--) {
    output += args[i].substring(j-1, j);
  }
  console.log(output);
}
