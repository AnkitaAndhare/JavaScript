// map: Transforms each element in an array and returns a new array.map() does not change the original array.
// filter: Filters elements in an array based on a condition and returns a new array.
// forEach: Executes a function for each array element, but does not return a new array.

// 'Map' is used to apply a function on every item in an array and returns the new array.
// 'Filter' is used to create a new array from an existing one, containing only those items that satisfy a condition specified in a function.

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newnums = mynums.map((num) => {
  return num + 10;
});

console.log(newnums);
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

const newarr = [];
const nums = mynums.forEach((item) => {
  newarr.push(item + 10);
});
console.log(newarr);

// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]


//const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const number = mynums
  .map((i) => i * 10) // [10, 20, 30,.....100]
  .map((i) => i + 1) // [11, 21,......101]
  .filter((i) => i >= 40);

console.log(number); // [ 41, 51,  61, 71,  81, 91, 101]




