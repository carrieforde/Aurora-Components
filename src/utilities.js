class Utilities {
  constructor(devMode = false) {
    this.devMode = devMode;
  }

  camelCase(string) {
    string = string.split(' ');
    string[0] = string[0].toLowerCase();

    for (let i = 1; i < string.length; i++) {
      let subStr = string[i].substring(1, string[i].length);

      string[i] = string[i][0].toUpperCase().concat(subStr.toLowerCase());
    }

    return string.join('').replace(/([^a-z\d])/gi, '');
  }
}

export default Utilities;
