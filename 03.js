let score = 34
console.log(typeof score);  

let s = "34abs"
let valueInNumber = Number(s)
console.log(typeof valueInNumber);  // number 
console.log(valueInNumber); // NaN

let n = null
let value = Number(n)
console.log(typeof value);  // number 
console.log(value);   // 0

let v = undefined
let value1 = Number(v)
console.log(typeof value1);  // number 
console.log(value1);   // NaN

let b = true
let value2 = Number(b)
console.log(typeof value2);  // number 
console.log(value2);   // 1


/* "33" convert 33
    "33abc" = nan
    true = 1

    1 = true
    "" = false
    "Ankita" = true

    33 to string 33 
*/


//  *********** Operation ******************//

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);


let str1 = "hello";
let str2 = "Ankita";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);  // 12
console.log(1 + "2");   //12
console.log("1" + 2 + 2);  // 122
console.log(1 + 2 + "2");  //32

console.log(+true); // 1
console.log(+ "");   // 0 null is 0 so 


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let p = 3;
const q = ++p;

console.log(`a:${p}, b:${q}`);
// Expected output: "p:4, q:4"

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // false


/*
primitive  call by value (modification made in fun do not affect original data)
1 String
2 Number
3 Boolean
4 null (empty not zero)
5 undefined 
6 Symbol
7 BigInt


non primitive   reference type (modification affects)
1 Objects
2 Array         
3 Function     function obj

*/




