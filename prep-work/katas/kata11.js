const organizeInstructors = (instructors) => {
  var courses = {};
  for (var i = 0; i < instructors.length; i++) {
    if (!courses[instructors[i].course]) {
      courses[instructors[i].course] = [];
    }
    courses[instructors[i].course].push(instructors[i].name);
  }
  return courses;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));
