import Handlebars from 'handlebars-template-loader/runtime';
import navigation from './includes/navigation';
import code from './includes/code';
import Utilities from './utilities';

const utils = new Utilities();

Handlebars.registerHelper('camelCase', string => utils.camelCase(string));

Handlebars.registerHelper('lowerCase', string => string.toLowerCase());

Handlebars.registerHelper('capitalize', string => utils.capitalize(string));

Handlebars.registerPartial('navigation', navigation);

Handlebars.registerPartial('code', code);
