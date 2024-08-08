// fetch('').then().catch().finally()

// creation of promise
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task is complete");
    resolve();
  }, 1000);
});

//consume promise
promiseOne.then(function () {
  console.log("promise run");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});

// 3rd
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Ankita", eami: "ankita@ex.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

// 4th
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Ankita", password: "123" });
    } else {
      reject("Something went wrong");
    }
  }, 2000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("THe promise is either resolved or rejected");
  });

// realtime ex
async function getAllUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    //console.log(response);
    const data = await response.json();  //it take time so await 
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}

getAllUser();

// .then .catch method

fetch("https://randomuser.me/api/")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });












// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
/*
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed. 

*/
