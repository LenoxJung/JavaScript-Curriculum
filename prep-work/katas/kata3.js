const numberOfVowels = (data) => {
  var regex = /[aeiou]/g;
  return data.match(regex).length;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
