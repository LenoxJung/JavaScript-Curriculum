const urlEncode = (text) => {
  var arr = text.trim().split('');
  var url = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == " ") {
      arr[i] = "%20";
    }
    url += arr[i];
  }
  return url;
}
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
