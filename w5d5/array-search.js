function arraySearch(array, item) {
  let index = null;
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      index = i;
      break;
    }
  }
  return index;
}

function arraySearch(array, item) {
  let min = 0;
  let max = array.length - 1;
  while (true) {
    const middleIndex = Math.floor((min + max)/2.0);
    const currentItem = array[middleIndex]
    if (currentItem === item) {
      return middleIndex;
    } else if (currentItem < item) {
      min = middleIndex + 1;
    } else {
      max = middleIndex - 1;
    }
    if (min > max) {
      return null;
    }
  }
}
