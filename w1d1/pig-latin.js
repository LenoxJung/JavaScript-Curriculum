var args = process.argv.slice(2);
var output = "";
for (var i = 0; i < args.length; i++) {
  output = output + args[i].substring(1) + args[i].substring(0, 1) + "ay" + " ";
}
console.log(output);
