const talkingCalendar = (date) => {
  var output = "";
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  output += months[parseInt(date.substring(5, 7)) - 1];
  output += " ";
  if (date.charAt(8) == 0) {
    output += date.substring(9);
  } else {
    output += date.substring(8);
  }
  switch (date.charAt(9)) {
    case "1":
      output += "st, ";
      break;
    case "2":
      output += "nd, ";
      break;
    case "3":
      output += "rd, ";
      break;
    default:
      output += "th, ";
  }
  output += date.substring(0, 4);
  return output;
}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
