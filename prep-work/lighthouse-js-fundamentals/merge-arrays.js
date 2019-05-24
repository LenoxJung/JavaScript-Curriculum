function merge(arr, arr2) {
  var merged = [];
  var i = 0;
  var j = 0;
  while (arr[i] || arr2[j]) {
    if (arr[i] < arr2[j] || arr[i] && !arr2[j]) {
      merged.push(arr[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  return merged;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
