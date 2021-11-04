import cards from './cards';

export default class Rendering {
  constructor() {
    this.container = null;
    this.button = null;
    this.cardsList = [];
    this.input = null;
    this.message = null;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('Container is not HTMLElement');
    }
    this.container = container;
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('Container not bind to DOM');
    }
  }

  draw() {
    this.checkBinding();

    const containerCards = document.createElement('div');
    containerCards.classList.add('container-cards');
    this.container.appendChild(containerCards);

    // eslint-disable-next-line guard-for-in
    for (const key in cards) {
      const card = document.createElement('div');
      card.classList.add(`${cards[key]}`, 'card');
      card.setAttribute('data-id', `${cards[key]}`);
      containerCards.appendChild(card);
      this.cardsList.push({
        [key]: card,
      });
    }

    const containerInput = document.createElement('form');
    containerInput.classList.add('container-input');
    this.container.appendChild(containerInput);

    const inputField = document.createElement('input');
    inputField.setAttribute('data-id', 'input');
    containerInput.appendChild(inputField);
    this.input = inputField;

    const button = document.createElement('button');
    button.textContent = 'Click to Validate';
    button.type = 'button';
    containerInput.appendChild(button);
    this.button = button;

    const msg = document.createElement('div');
    this.container.appendChild(msg);
    this.message = msg;
  }
}
