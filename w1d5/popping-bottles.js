var bottles = Math.floor(process.argv[2]/2);
var empty = bottles;
var caps = bottles;

const recycle = () => {
  var gained = 0;
  gained += Math.floor(caps/4);
  gained += Math.floor(empty/2);
  bottles += gained;
  caps = gained + caps%4;
  empty = gained + empty%2;
  if (empty > 1 || caps > 3) {
    return recycle();
  }
  // while (empty > 1 || caps > 3) {
  //   gained += Math.floor(caps/4);
  //   gained += Math.floor(empty/2);
  //   bottles += gained;
  //   caps = gained + caps%4;
  //   empty = gained + empty%2;
  //   gained = 0;
  // }
  console.log("TOTAL BOTTLES: " + bottles);
  console.log("REMAINING BOTTLES: " + empty);
  console.log("REMAINING CAPS:" + caps);
  console.log("TOTAL EARNED:");
  console.log("  BOTTLES: " + Math.floor(bottles/2));
  console.log("  CAPS: " + Math.floor(bottles/4))
}

recycle();
