function getList() {
  var list = [];
  return list;
}

function sortList(arr) {
  return arr.sort(function(a,b){
    return a-b;
  });
}

module.exports = {
  version: getList(),
  addToList: function(num) {
    this.version.push(num);
  },
  sortList: function() {
    return sortList(this.version);
  }
}
