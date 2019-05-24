const urlDecode = (text) => {
  var obj = {};
  text = text.replace(/%20/g, " ");
  var arr = [];
  arr = text.split("&");
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    arr2 = arr[i].split("=");
    obj[arr2[0]] = arr2[1];
  }
  return obj;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
