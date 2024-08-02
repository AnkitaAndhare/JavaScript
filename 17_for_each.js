// for each loop need callback fun and callback fun has no name
// item take all value from coding array

const coding = ["js", "ruby", "python", "java", "cpp"];

coding.forEach(function (item) {
  // js ruby python java cpp
  console.log(item);
});

console.log("for each loop on arrow fun"); // js ruby python java cpp
coding.forEach((val) => {
  console.log(val);
});

console.log("referncing the function in for each loop"); // js ruby python java cpp
function printme(item) {
  console.log(item);
}
coding.forEach(printme);

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});
// js 0 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
// python 2 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
// java 3 [ 'js', 'ruby', 'python', 'java', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'python', 'java', 'cpp' ]

// *********** Ojects in Array [{}, {}] ***************//

const myoding = [
  {
    langname: "javascript",
    langfile: "js",
  },

  {
    langname: "java",
    langfile: "java",
  },

  {
    langname: "python",
    langfile: "py",
  },
];

myoding.forEach((item) => {
  console.log(item);
});

//  { langname: 'javascript', langfile: 'js' }
// { langname: 'java', langfile: 'java' }
// { langname: 'python', langfile: 'py' }

myoding.forEach((item) => {
  console.log(item.langname);
});

//javascript
//java
//python
