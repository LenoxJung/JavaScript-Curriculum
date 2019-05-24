var args = process.argv[2];
const obfuscate = (pass) => {
  var output = "";
  for (var i = 0; i < pass.length; i++) {
    switch (pass.charAt(i)) {
      case "a":
        output += 4;
        break;
      case "e":
        output += 3;
        break;
      case "o":
        output += 0;
        break;
      case "l":
        output += 1;
        break;
      default:
        output += pass.charAt(i);
    }
  }
  return(output);
}
console.log(obfuscate(args));
