import Handlebars from 'handlebars-template-loader/runtime';
import Utilities from './utilities';

const utils = new Utilities();

Handlebars.registerHelper('camelCase', string => {
  return utils.camelCase(string);
});
