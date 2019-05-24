function loopyLighthouse(range, multiples, words) {
  for (range[0]; range[0] <= range[1]; range[0]++) {
    var output = "";
    if (range[0] % multiples[0] === 0) {
      output += words[0];
    }
    if (range[0] % multiples[1] === 0) {
      output += words[1];
    }
    console.log(output === "" ? range[0] : output);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
