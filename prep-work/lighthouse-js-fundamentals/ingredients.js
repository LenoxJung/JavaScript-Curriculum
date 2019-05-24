var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var repeat = 0;
while (repeat < ingredients.length) {
  console.log(ingredients[repeat]);
  repeat++;
}

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

repeat = ingredients.length;
while (repeat > 0) {
  repeat--;
  console.log(ingredients[repeat]);
}

for (var i = ingredients.length; i > 0; i--) {
  console.log(ingredients[i-1]);
}
