var packingList = ["tent", "bug spray", "sleeping bag"];
console.log(packingList[0]);
console.log(packingList[1]);
console.log(packingList[2]);

var chorus = "Let's dance!";
var repeat = 0;
while (repeat < 10) {
  console.log(chorus);
  repeat ++;
}
console.log("Until the sun comes up!");
repeat = 0;

while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");
