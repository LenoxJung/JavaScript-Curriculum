const camelCase = (input) => {
  var output = "";
  var arr = input.split("");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == " ") {
      arr.splice(i, 1);
      arr[i] = arr[i].toUpperCase();
    }
    output += arr[i];
  }
  return output;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
