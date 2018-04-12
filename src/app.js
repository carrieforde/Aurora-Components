import preload from '../data';
import './helpers';
import Accordion from './components/accordion/index';
import accordion from './components/accordion/accordion';
import './sass/main';

const app = document.getElementById('app');

app.innerHTML = accordion({ preload });

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    new Accordion();
  }, 100);
});
