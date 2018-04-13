import Handlebars from 'handlebars-template-loader/runtime';
import navigation from './includes/navigation';
import Utilities from './utilities';

const utils = new Utilities();

Handlebars.registerHelper('camelCase', string => utils.camelCase(string));

Handlebars.registerHelper('lowerCase', string => string.toLowerCase());

Handlebars.registerPartial('navigation', navigation);
