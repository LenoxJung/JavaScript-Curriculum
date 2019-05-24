const sumLargestNumbers = (data) => {
  var num = 0;
  var num2 = 0;
  num = Math.max(...data);
  data.splice(data.indexOf(num),1);
  num2 = Math.max(...data);
  return num + num2;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
