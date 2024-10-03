// Instructions: Use lodash's chain function to filter the even numbers from the array and then get their sum.

const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const sumOfEvens = _.chain(numbers)
.filter(n => n % 2 === 0)
.sum()
.value()

// your code here

console.log(sumOfEvens); // Expected output: 20
