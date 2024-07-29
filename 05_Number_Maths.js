const score = 400
console.log(score);

const balance = new Number(100)  // explicity definenig number as type
console.log(balance);

console.log(balance.toString());

console.log(balance.toString().length);

console.log(balance.toFixed(2)); // 100.00

const othernum = 23.332
console.log(othernum.toPrecision(3));  // 23.3

const num = 100000
console.log(num.toLocaleString('en-IN')); //1,00,000

//********************  Maths ****************** */

console.log(Math);

console.log(Math.abs(-3));      // 3

console.log(Math.round(7.6));   // 8

console.log(Math.ceil(4.2));    // 5
console.log(Math.floor(4.2));   // 4

console.log(Math.min(2, 4, 5, 7)); //2

console.log(Math.random());  // 0 to 1 only
console.log(Math.floor(Math.random() * 10) + 1);    // from 1 to 9

const min = 10
const max = 20

console.log((Math.random() * (max - min + 1)) + min) ;