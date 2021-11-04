export default function checkLuhn(value) {
  let isEven = true;
  let sum = 0;

  for (let i = value.length - 2; i >= 0; i -= 1) {
    let number = parseInt(value.charAt(i), 10);

    if (isEven) {
      number *= 2;
      if (number > 9) number -= 9;
    }

    sum += number;
    isEven = !isEven;
  }

  return (String(10 - (sum % 10)) === value.charAt(value.length - 1));
}
