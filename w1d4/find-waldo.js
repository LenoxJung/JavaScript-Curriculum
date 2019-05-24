function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i);
  //   }
  // }
  arr.forEach(function(whoDis, index) {
    if (whoDis === "Waldo") found(index);
  });
}

function actionWhenFound(x) {
  console.log(`Found waldo at index ${x}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
