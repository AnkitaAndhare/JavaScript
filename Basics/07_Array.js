const myArr = [0, 1, 2, 3, 4, 5]  // resizable , mix of data type, create shallow copies
console.log(myArr);
console.log(myArr[1]);

const myHeroes = ["shaktiman", "naagraj"]

const myArr1 =  new Array(1, 2, 3, 4)

// Array Methods

myArr.push(6)            // add 
console.log(myArr);

myArr.pop()              // remove
console.log(myArr);

myArr.unshift(9)         // add ele in first position
console.log(myArr);

myArr.shift();           // remove first element
console.log(myArr);

console.log(myArr.includes(9));   // false

console.log(myArr.indexOf(9));     // -1

const newArray = myArr.join()
console.log(myArr);            // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArray);        //  0,1,2,3,4,5   string 

// Slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);   //[ 1, 2 ] range not included

const myn2 = myArr.splice(1,3)
console.log(myn2);   //[ 1, 2, 3 ]  range included and array also get divided 

console.log("B", myArr);  //B [ 0, 4, 5 ]












  
