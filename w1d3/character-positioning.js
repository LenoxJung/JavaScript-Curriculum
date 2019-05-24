const countLetters = (input) => {
  input = input.replace(/\s/g, "");
  var output = {};
  for (var i = 0; i < input.length; i++) {
    if (output[input.charAt(i)]) output[input.charAt(i)].push(i);
    else (output[input.charAt(i)] = [i]);
  }
  return output;

}
console.log(countLetters("lighthouse in the house"));
