const repeatNumbers = (data) => {
  var numbers = "";
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i][1]; j++) {
      numbers += data[i][0];
    }
    if (i < data.length - 1) {
      numbers += ", "
    }
  }
  return numbers;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
