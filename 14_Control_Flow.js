
// === type and value 
// == value 

let string = "10";
let number = 10;
console.log(string == number); // true
console.log(string === number); // false


const balanace = 1000;

if (balanace > 500) {
  console.log("test");
} else if (balanace > 750) {
  console.log("less than 750");
}


const userloggedIn = true;
const debitCard = true;
const loffedFromGoogle = false;
const loffedFromEmail = true;

if (userloggedIn && debitCard && 2 == 2) {
  console.log("Allow to buy course");
}

if (loffedFromGoogle || loffedFromEmail) {
  console.log("user logged in");
}

//************  SWITCH ******************* *//

const month = 3;

switch (month) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wendsday");
    break;
  default:
    console.log("other");
    break;
}


//********************Truth value*************** */


const userEmail = [1]

if (userEmail) {
    console.log("got user mail");
}else{
    console.log("Don't' have user email");
}

//  checking Array is empty or not 
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// object empty

const  emptyobje = {}
if (Object.keys(emptyobje).length === 0) {
    console.log("Object is empty");
}

// falsy valeue 
false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// truthy valuse
 "0" , "false", " ", [], {}, function(){}
 
//  Nullish coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10     // 5
val1 = null ?? 10   // 10
val1 = undefined ?? // 10  

console.log(val1); 


// *********** TERNIARY OPRATOR ***********
// condition ? true : false 

const iceTeaPrice = 100 
iceTeaPrice <=50 ? console.log("less than 50") : console.log("greater than 50")   // greater than 50


/* 

var global scope.....let const 

 < , > <=, >=, == !=  

This operator is known as the "strict equality" operator. In summary, the "==" operator compares values after performing type conversion, while the "===" operator compares values without type conversion.

*/
