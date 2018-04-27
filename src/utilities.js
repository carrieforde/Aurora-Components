class Utilities {
  constructor(devMode = false) {
    this.devMode = devMode;
    this.keyCodes = Object.freeze({
      TAB: 9,
      RETURN: 13,
      ESC: 27,
      SPACE: 32,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    });
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

  capitalize(string) {
    string = string.split(' ');

    for (let i = 0; i < string.length; i++) {
      const subStr = string[i].substring(1, string[i].length);

      string[i] = string[i][0].toUpperCase().concat(subStr.toLowerCase());
    }

    return string.join(' ');
  }
}

export default Utilities;
