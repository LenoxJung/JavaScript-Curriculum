var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

const print1337 = (html) => {
  //console.log(html.replace(/er/gi, "0r").replace(/you/gi, "j00").replace(/ck/gi, "x").replace(/t/gi, "7").replace(/s/gi, "5").replace(/o/gi, "0").replace(/l/gi, "1").replace(/e/gi, "3").replace(/a/gi, "4"));
  const substitute = {ck : 'x', er : '0r', you : 'j00', a : '4', e : '3', l : '1', o : '0', s : '5', t : '7' }
  for (var letter in substitute) {
    var regex = new RegExp(letter, "gi")
    html = html.replace(regex, substitute[letter]);
  }
  console.log(html);
}

getHTML(requestOptions, print1337);
