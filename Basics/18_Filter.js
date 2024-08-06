// for each does not return any value

const coding = ["js", "ruby", "python", "java", "cpp"];
const values = coding.forEach((item) => {
  console.log(item);
});

console.log(values); // undefined  js,ruby,python,java,cpp

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//The filter() method creates a new array filled with elements that pass a test provided by a function.
const result = mynums.filter((num) => {// callback fun
  return num > 4;
});
console.log(result); //[ 5, 6, 7, 8, 9, 10 ]

const newnums = [];
mynums.forEach((num) => {
  if (num > 4) {
    newnums.push(num);
  }
});

console.log(newnums); //[ 5, 6, 7, 8, 9, 10 ]

const books = [
  { title: "book1", genre: "fiction", publish: 1989 },
  { title: "book2", genre: "history", publish: 1990 },
  { title: "book3", genre: "non-fiction", publish: 2001 },
  { title: "book4", genre: "non-fiction", publish: 2005 },
];

const userBooks = books.filter((bk) => {
  return bk.genre === "history";
});

console.log(userBooks); //[ { title: 'book2', genre: 'history', publish: 1989 } ]

const userb = books.filter((item) => {
  return item.publish > 2000 && item.genre;
});

console.log(userb);
// [
//     { title: 'book3', genre: 'non-fiction', publish: 2001 },
//     { title: 'book4', genre: 'non-fiction', publish: 2005 }
//   ]



// map: Transforms each element in an array and returns a new array.
// filter: Filters elements in an array based on a condition and returns a new array.
// forEach: Executes a function for each array element, but does not return a new array.
