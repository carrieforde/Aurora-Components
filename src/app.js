import preload from '../data';
import './helpers';
import Accordion from './components/accordion/index';
import accordion from './components/accordion/accordion';
import Tabs from './components/tabs/index';
import tabs from './components/tabs/tabs';
import Carousel from './components/carousel/index';
import carousel from './components/carousel/carousel';
import './sass/main';

const app = document.getElementById('app');

app.innerHTML = accordion({ preload });
app.innerHTML += tabs({ preload });
app.innerHTML += carousel({ preload });

document.addEventListener('DOMContentLoaded', () => {
  new Accordion();
  new Tabs();
  new Carousel();
});
