import checkLuhn from './validity';
import defineSystem from './paymentSystem';

export default class Check {
  constructor(elements) {
    this.elements = elements;
    this.value = null;
    this.foundSystem = null;
  }

  init() {
    this.elements.input.addEventListener('keyup', () => {
      this.value = this.elements.input.value;

      const system = defineSystem(this.value);
      if (system) {
        if (this.foundSystem) {
          this.foundSystem.classList.remove('selected');
          this.foundSystem = null;
        }
        const card = this.elements.cardsList.find((item) => item[system]);
        this.foundSystem = card[system];
        this.foundSystem.classList.add('selected');
        this.elements.message.textContent = '';
      } else {
        this.elements.message.textContent = 'Номер не принадлежит к какой-либо из перечисленных систем';
      }
    });

    this.elements.button.addEventListener('click', () => {
      if (checkLuhn(this.value)) {
        this.elements.message.textContent = 'The credit card number you entered passed the Luhn Check and is therefore a valid credit card number!';
      } else {
        this.elements.message.textContent = 'The credit card number you entered failed the Luhn Check. It is not valid, did you make a typo?';
      }
    });
  }
}
