// we created this promise

let promise = new Promise((resolve, reject) => {
  console.log("i am a promise");
  //resolve(123)
  reject("some error occur")
});

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

getData(1).then((res) => {
  getData(2).then((res) => {});
});

//The await keyword can only be used inside an async function.
async function getAlldata(){
    await getData();
    await getData();
    await getData();
}
//use of promises       promise is object
const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("i am promise");
    // resolve("success");    // then will print
    reject(" network error");
  });
};

let promise = getPromise(); // calling fun
promise.then((res) => {
  console.log("promise fulfilles", res);
});

promise.catch((err) => {
  console.log("rejected", err);
});

// promise chaining

function asyncFunction1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("succes");
    }, 4000);
  });
}

function asyncFunction2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("succes");
    }, 4000);
  });
}

console.log("fetching data1");
let p1 = asyncFunction1(); // res =  result
p1.then((res) => {
  console.log(res);
  console.log("fetching data2");
  asyncFunction2().then(() => {});
});

// fetching data1
// some data1
//  succes

// console.log("fetching data1");
// let p1 = asyncFunction2();
// p1.then((res) => {
//   // res =  result
//   console.log(res);
// });

/*

promise is for eventual completion of task. it is an object in js
solution to callback hell

let promise = new Promis(resolve, reject) =>{

})
 resolve, reject are callback by js

 pending     fulfilled       rejected
             resolved

*/
