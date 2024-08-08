// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

async function hello() {
  console.log("hello");
}
hello();

function api() {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("weather data");
        resolve(200);
      }, 2000);
  });
}

async function getWeatherdata() {
    await api();   // 1st call
    await api();
 }
getWeatherdata();







function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

// getData(1).then((res) => {
//   console.log("getting data2");
//   getData(2).then((res) => {});
// });

async function getAlldata() {
  console.log("getting data1");
  await getData(1);

  console.log("getting data2");
  await getData(2);
  
  console.log("getting data3");
  await getData(3);
}
getAlldata();


// iifis function function without name....( function(){} ) ()
// run only once...fun calling is not required
// (async function () {
//     console.log("getting data1");
//     await getData(1);
  
//     console.log("getting data2");
//     await getData(2);
    
//     console.log("getting data3");
//     await getData(3);
//   })();