var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

const addFollowers = () => {
  for (var person in data) {
    data[person].follows.forEach(function(follow) {
      if (data[follow].followers) {
        data[follow].followers.push(person);
      } else {
        data[follow].followers = [person];
      }
    });
  }
}

addFollowers();

// List everyone and for each of them, list the names of who they follow and who follows them
const listEveryoneNames = () => {
  for (var person in data) {
    var followList = [];
    var followerList = [];
    data[person].follows.forEach(function(follow) {
      followList.push(follow);
    });
    data[person].followers.forEach(function(follower) {
      followerList.push(follower);
    });
    console.log(data[person].name + " follows: " + followList.join(", ") + " followers: " + followerList.join(", "));
  }
}
// listEveryoneNames();


// Identify who follows the most people
const mostFollows = () => {
  var someBody = data.f01;
  for (var person in data) {
    if (data[person].follows.length > someBody.follows.length) someBody = data[person];
  }
  return someBody;
}
//console.log(mostFollows());

// Identify who has the most followers
const mostFollowers = () => {
  var someBody = data.f01;
  for (var person in data) {
    if (data[person].followers.length > someBody.followers.length) someBody = data[person];
  }
  return someBody;
}
// console.log(mostFollowers());

// Identify who has the most followers over 30
const mostFollowersOver = () => {
  var someBody = data.f01;
  for (var person in data) {
    if (data[person].followers.length >= someBody.followers.length && data[person].age > 30) someBody = data[person];
  }
  return someBody;
}
// console.log(mostFollowersOver());

// Identify who follows the most people over 30
const mostFollowsOver = () => {
  var someBody = data.f01;
  for (var person in data) {
    if (data[person].follows.length >= someBody.follows.length && data[person].age > 30) someBody = data[person];
  }
  return someBody;
}
// console.log(mostFollowsOver());

// List those who follow someone that doesn't follow them back
const followThemBack = () => {
  for (var person in data) {
    var bool = false;
    data[person].follows.forEach(function(follow) {
      if (!data[follow].follows.includes(person)) bool = true;
    });
    if (bool) console.log(data[person].name);
  }
}
// followThemBack();

// List everyone and their reach (sum of # of followers and # of followers of followers)
const reach = () => {
  for (var person in data) {
    var related = [];
    data[person].followers.forEach(function(follower) {
      if (!related.includes(follower)) related.push(follower);
      data[follower].followers.forEach(function(followersFollower) {
        if (!related.includes(followersFollower) && followersFollower != person) related.push(followersFollower);
      });
    });
    console.log(data[person].name + " has a reach of: " + related.length);
  }
}
console.log(data);
reach();
