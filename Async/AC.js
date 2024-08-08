// synchronous
console.log("one");
console.log("two");

// Asynchronous

function hello() {
  console.log("hello");
}

setTimeout(hello, 4000);

console.log("three");
console.log("four");

// CallBacks  passing fun as argumrnt to another fun

function sum(a, b) {
  console.log(a + b);
}
function calculator(a, b, sumcallback) {
  sumcallback(a, b);
}
calculator(1, 2, sum);

// OR
calculator(1, 2, (a, b) => {
  console.log(a + b);
});

// callback hell
// Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.

function getdata(dataId, getNextData) {
  setTimeout(() => {
    console.log("data", dataId);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getdata(1, () => {
  console.log("getting data2........."); //call back fun
  getdata(2, () => {
    console.log("getting data3........."); 

    getdata(3, () => {
      console.log("getting data4........."); 

      getdata(4);
    });
  });
});

// getdata(2);
// getdata(3);   // data 1  data 2 then data 3

/*
async await >> promise chains >> callback hell

// Asynchronous
JavaScript programs can start long-running tasks, and continue running other tasks in parallel


*/
