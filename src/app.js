import preload from '../data';
import './helpers';
import Accordion from './components/accordion/index';
import accordion from './components/accordion/accordion';
import Tabs from './components/tabs/index';
import tabs from './components/tabs/tabs';
import './sass/main';

const app = document.getElementById('app');

app.innerHTML = accordion({ preload });
app.innerHTML += tabs({ preload });

document.addEventListener('DOMContentLoaded', () => {
  new Accordion();
  new Tabs();
});
