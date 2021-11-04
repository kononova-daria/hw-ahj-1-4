export default function defineSystem(value) {
  if (/^3[47]/.test(value)) return 'americanExpress';
  if (/^4/.test(value)) return 'visa';
  if (/^5[1-5]/.test(value)) return 'masterCard';
  if (/^6[0245]/.test(value)) return 'discover';
  if (/^35/.test(value)) return 'jcb';
  if (/^2/.test(value)) return 'mir';
  return '';
}
