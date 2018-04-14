/* eslint-disable */
import preload from '../data';
import siteData from '../site-data';
import './helpers';
import welcome from './includes/welcome';
import header from './includes/header';
import footer from './includes/footer';
import Accordion from './components/accordion/index';
import accordion from './components/accordion/accordion';
import Tabs from './components/tabs/index';
import tabs from './components/tabs/tabs';
import Carousel from './components/carousel/index';
import carousel from './components/carousel/carousel';
import './vendor/prism.js';
import './vendor/prism.css';
import feather from 'feather-icons';
import './sass/main';

const app = document.getElementById('app');

app.innerHTML = `
  ${header({ siteData })}
  <main class="page__content"></main>
  ${footer({ siteData })}
`;

feather.replace();

document.addEventListener('DOMContentLoaded', getTemplate);
document.addEventListener('DOMContentLoaded', highlightCode);
window.addEventListener('hashchange', getTemplate);

function highlightCode() {
  const code = document.getElementById('code');

  if (!code) {
    return false;
  }

  Prism.highlightAllUnder(code);
  return true;
}

function getTemplate(event) {
  const templateName = event.newURL
      ? event.newURL.split('#')[1]
      : window.location.href.split('#')[1],
    pageContent = document.querySelector('.page__content');

  switch (templateName) {
    case '':
    case undefined:
      pageContent.innerHTML = welcome();
      break;

    case 'accordion':
      pageContent.innerHTML = accordion({ preload });
      new Accordion();
      new Tabs('#code');
      break;

    case 'carousel':
      pageContent.innerHTML = carousel({ preload });
      new Carousel();
      new Tabs('#code');
      break;

    case 'tabs':
      pageContent.innerHTML = tabs({ preload });
      new Tabs('.tabs');
      new Tabs('#code');
      break;

    default:
      `<h2>Sorry, ${templateName} can't be found!</h2>`;
      break;
  }

  highlightCode();
}
