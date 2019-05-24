var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

function map(arr, func) {
  var arr2 = [];
  arr.forEach(function (element, index){
    arr2[index] = func(element);
  });
  console.log(arr2);
}
