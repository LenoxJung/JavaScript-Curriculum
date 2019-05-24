const blocksAway = (directions) => {
  var distance = {
    east: 0,
    north: 0
  };
  var cardinal = {
    north: {
      right: "east",
      left: "west"
    },
    south: {
      right: "west",
      left: "east"
    },
    east: {
      right: "south",
      left: "north"
    },
    west: {
      right: "north",
      left: "south"
    }
  }
  var dir = "";
  if (directions[0] == "left") {
    dir = "north";
    distance.north += directions[1];
  } else {
    dir = "east";
    distance.east += directions[1];
  }
  for (var i = 2; i < directions.length; i += 2) {
    dir = cardinal[dir][directions[i]];
    if (dir == "west") {
      distance.east -= directions[i+1];
      distance.east = distance.east < 0 ? 0 : distance.east;
    } else if (dir == "south") {
      distance.north -= directions[i+1];
      distance.north = distance.north < 0 ? 0 : distance.north;
    } else {
      distance[dir] += directions[i+1];
    }
  }
  return distance;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
