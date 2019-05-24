const maxProfit = (arr, min, profit) => {
  var current = arr[0];
  var profit = profit || -1;
  var min = min || current;
  if (current < min) min = current;
  if (current - min > profit) {
    profit = current - min;
  }
  if (arr.length > 1) return maxProfit(arr.slice(1), min, profit);
  return profit;
}

var input = [45, 24, 35, 31, 40, 38, 11];
console.log(maxProfit(input));
