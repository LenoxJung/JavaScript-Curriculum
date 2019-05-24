class NameFormatter {

  invertName(name) {
    if (name === undefined) {
      throw new Error("No Name!")
    }
    if (name === '') {
      return '';
    }
    name = name.trim();
    const names = name.split(" ");
    if (names[0].includes(".")) {
      if (names[1] && names[2]) {
        return names[0] + " " + names[2] + ", " + names[1];
      }
      if (names[1]) {
        return names[0] + " " + names[1];
      }
      return "";
    }
    if(names[1]){
      return names[1] + ", " + names[0];
    }
    return name;
  }

}

module.exports = NameFormatter;
