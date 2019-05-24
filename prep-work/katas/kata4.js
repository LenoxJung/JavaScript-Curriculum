const instructorWithLongestName = (instructors) => {
  var instructor = instructors[0];
  for (var i = 1; i < instructors.length; i++) {
    if (instructors[i].name.length > instructor.name.length) {
      instructor = instructors[i];
    }
  }
  return instructor;
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
