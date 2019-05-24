function range(start, end, step) {
  var arr = [];
  if (start || start === 0 && end && step && start < end && step > 0) {
    for(start; start <= end; start += step) {
      arr.push(start);
    }
  }
  return arr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
