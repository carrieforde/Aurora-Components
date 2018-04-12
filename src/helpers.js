import Handlebars from 'handlebars-template-loader/runtime';

Handlebars.registerHelper('camelCase', string => {
  string = string.split(' ');
  string[0] = string[0].toLowerCase();

  for (let i = 1; i < string.length; i++) {
    let subString = '';

    for (let j = 0; j < string[i].length; j++) {
      if (j === 0) {
        subString += string[i][j].toUpperCase();
      } else {
        subString += string[i][j];
      }
    }

    string[i] = subString;
  }

  string = string.join('');
  return string.replace(/([^a-z\d])/gi, '');
});
