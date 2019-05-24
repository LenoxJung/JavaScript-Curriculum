const squareCode = (message) => {
  var noSpace = message.replace(/\s/g, "");
  var code = "";
  var square = Math.ceil(Math.sqrt(noSpace.length));
  var matrix = [];
  for (var i = 0; i < noSpace.length; i+=square) {
    matrix.push(noSpace.substring(i, i + square));
  }
  for (var i = 0; i < square; i++) {
    for (var j = 0; j < matrix.length; j++) {
      code += matrix[j].substring(i,i+1);
    }
    code += " ";
  }

  return code;
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
