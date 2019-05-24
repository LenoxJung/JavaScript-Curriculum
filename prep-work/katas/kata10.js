const calculateChange = (total, cash) => {
  var change = {};
  var left = cash - total;
  if (left >= 2000) {
    change.twenty = 0;
    while (left >= 2000) {
      left -= 2000;
      change.twenty++;
    }
  }
  if (left >= 1000) {
    change.ten = 1;
    left -= 1000;
  }
  if (left >= 500) {
    change.five = 1;
    left -= 500;
  }
  if (left >= 200) {
    change.two = 0;
    while (left >= 200) {
      change.two++;
      left -= 200;
    }
  }
  if (left >= 100) {
    change.one = 1;
    left -= 100;
  }
  if (left >= 25) {
    change.quarter = 0;
    while (left >= 25) {
      change.quarter++;
      left -= 25;
    }
  }
  if (left >= 10) {
    change.dime = 0;
    while (left >= 10) {
      change.dime++;
      left -= 10;
    }
  }
  if (left >= 5) {
    change.nickel = 1;
    left -= 5;
  }
  if (left >= 1) {
    change.penny = 0;
    while (left >= 1) {
      change.penny++;
      left -= 1;
    }
  }
  return change;
}
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
