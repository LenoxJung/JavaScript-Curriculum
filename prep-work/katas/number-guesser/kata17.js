let prompt = require("prompt-sync")();

// code below (replace this example)
var num = Math.ceil(Math.random() * 5);
var previous = [];
var answer;
while (parseInt(answer) !== num && answer !== "CANCEL") {
  answer = prompt("Guess a number: ");
  if (parseInt(answer) === num) {
    previous.push(answer);
    console.log("You got it! You took " + previous.length + " attempts!")
  } else if (isNaN(answer) && answer !== "CANCEL") {
    console.log("Not a number! Try again!");
  } else if (previous.includes(answer)) {
    console.log("Already Guessed!");
  } else if (num > answer) {
    previous.push(answer);
    console.log("Too Low!");
  } else if (num < answer) {
    previous.push(answer);
    console.log("Too High!");
  }
}
