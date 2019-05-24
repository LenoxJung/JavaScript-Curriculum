const makeCase = (input, cases) => {
  var output = "";
  switch (cases) {
    case "camel":
      var arr = input.split(" ");
      output += arr[0];
      for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        output += arr[i];
      }
      return output;
    case "pascal":
      var arr = input.split(" ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        output += arr[i];
      }
      return output;
    case "snake":
      return input.replace(/\s/g, "_");
    case "kebab":
      return input.replace(/\s/g, "-");
    case "title":
      var arr = input.split(" ");
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        output += arr[i]
        output += " ";
      }
      return output;
    case "vowel":
      var vowels = "aeiou";
      var arr = input.split("");
      for (var i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
          arr[i] = arr[i].toUpperCase();
        }
        output += arr[i];
      }
      return output;
    case "consonant":
      var vowels = "aeiou";
      var arr = input.split("");
      for (var i = 0; i < arr.length; i++) {
        if (!vowels.includes(arr[i])) {
          arr[i] = arr[i].toUpperCase();
        }
        output += arr[i];
      }
      return output;
    case "upper":
      return input.toUpperCase();
    case "lower":
      return input.toLowerCase();;
    default:
      for (var i = 0; i < cases.length; i++) {
        input = makeCase(input, cases[i]);
      }
    return input;
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
