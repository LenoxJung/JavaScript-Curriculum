const multiplicationTable = (maxValue) => {
  var table = "";
  for (var i = 1; i < maxValue + 1; i++) {
    for (var j = 1; j < maxValue + 1; j++) {
      table += i*j;
      table += " ";
    }
    table += "\n";
  }
  return table;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
