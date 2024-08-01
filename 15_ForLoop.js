// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if (i == 5) {
//     console.log("5 is best");
//   }
//   console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`outer loop ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     //console.log(`inner ${j} and outer ${i}`);
//     console.log(i + '*' + j + '=' + i*j);
//   }
// }

// let myArray = ["flash", "batman", "superman"];

// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }
// console.log(myArray.length);

// // continue  and break

// for (let i = 1; i < 20; i++) {
//   if (i == 5) {
//     break;
//   }
//   console.log(`value of i is ${i}`);
// }

// console.log("**************continue***********");

// for (let i = 1; i < 20; i++) {
//   if (i == 5) {
//     console.log("5 is detected");
//     continue;
//   }
//   console.log(`value of i is ${i}`);
// }

// ********************* While *******************//
let i = 0;
while (i < 10) {
  console.log(`value of i is ${i}`);
  i = i + 2;
} // 0 2 4 6 8

let myarray = [10, 20, 30]
let j=0
while (j < myarray.length) {
    console.log(`Value is ${myarray[j]}`);
    j++
}   


console.log("***********Do While********");

let score = 11
do {
    console.log(`score is ${score}`);
    score++
} while (score<=5);