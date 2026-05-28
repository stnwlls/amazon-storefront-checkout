import {formatCurrency} from '../../scripts/utils/money.js';

console.log('Running tests for formatCurrency...');
console.log('');

console.log('Converts cents to dollars and cents:');
if (formatCurrency(2095) === '20.95') {
  console.log('PASS');
} else {
  console.error('FAIL');
}

console.log('');

console.log('Works with zero:');
if (formatCurrency(0) === '0.00') {
  console.log('PASS');
} else {
  console.error('FAIL');
}

console.log('');

console.log('Rounds up to the nearest cent:');
if (formatCurrency(2000.5) === '20.01') {
  console.log('PASS');
} else {
  console.error('FAIL');
}