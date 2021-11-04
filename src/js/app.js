import Check from './Check';
import Rendering from './Rendering';

const content = new Rendering();

content.bindToDOM(document.querySelector('#container'));
content.draw();

const check = new Check(content);
check.init();
