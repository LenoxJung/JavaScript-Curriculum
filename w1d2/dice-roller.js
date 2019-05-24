var args = process.argv[2];
const roll = (rolls) => {
  var arr = [];
  for (var i = 0; i < rolls; i++) {
    arr.push(Math.ceil(Math.random() * 6))
  }
  return arr.join(", ")
}
console.log(`Rolled ${args} dice: ${roll(args)}`)
