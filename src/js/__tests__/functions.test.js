import checkLuhn from '../validity';
import defineSystem from '../paymentSystem';

test.each([
  ['371449635398431', true],
  ['371449635398438', false],
])('проверка номера карты', (value, expected) => {
  expect(checkLuhn(value)).toBe(expected);
});

test.each([
  ['37', 'americanExpress'],
  ['45', 'visa'],
  ['60', 'discover'],
  ['53', 'masterCard'],
  ['35', 'jcb'],
  ['23', 'mir'],
])('определение системы', (value, expected) => {
  expect(defineSystem(value)).toBe(expected);
});
