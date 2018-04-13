/* eslint-disable */
import preload from '../data';
import siteData from '../site-data';
import './helpers';
import welcome from './includes/welcome';
import header from './includes/header';
import Accordion from './components/accordion/index';
import accordion from './components/accordion/accordion';
import Tabs from './components/tabs/index';
import tabs from './components/tabs/tabs';
import Carousel from './components/carousel/index';
import carousel from './components/carousel/carousel';
import './sass/main';

const app = document.getElementById('app');

app.innerHTML = `
  ${header({ siteData })}
  <main class="page__content">${welcome()}</main>
`;

window.addEventListener('hashchange', getTemplate);

function getTemplate(event) {
  const templateName = event.newURL.split('#')[1],
    pageContent = document.querySelector('.page__content');

  switch (templateName) {
    case '':
    case undefined:
      pageContent.innerHTML = welcome();
      break;

    case 'accordion':
      pageContent.innerHTML = accordion({ preload });
      new Accordion();
      break;

    case 'carousel':
      pageContent.innerHTML = carousel({ preload });
      new Carousel();
      break;

    case 'tabs':
      pageContent.innerHTML = tabs({ preload });
      new Tabs();
      break;

    default:
      `<h2>Sorry, ${templateName} can't be found!</h2>`;
      break;
  }
}
