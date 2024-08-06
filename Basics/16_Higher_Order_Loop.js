// ********* For of on Array***********
const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
  console.log(i);
}

// string
const greetings = "hello world";

for (const i of greetings) {
  if (i == " ") {
    continue;
  }
  console.log(`each char is ${i}`);
}

// maps key value in order , unique val

const map = new Map(); // M capital
map.set("IN", "India");
map.set("US", "United Kingdom");
map.set("IN", "India");

console.log(map);
//Map(2) { 'IN' => 'India', 'US' => 'United Kingdom' }

for (const i of map) {
  console.log(i); //[ 'IN', 'India' ] [ 'US', 'United Kingdom' ]
}

for (const [key, value] of map) {
  console.log(key, "->", value);
}
//IN -> India    US -> United Kingdom

for (const key in map) {   // not itrable 
  console.log(key); 
}

console.log("********** for in loop ************");

const myObject = {
  js: "javascript",
  cpp: "c++",
  rb: "ruby",
  css: " Cascading Style Sheets",
};

// for of will not iterate the object
// for (const obj of myObject) {
//   console.log(obj);
// }

for (const key in myObject) {
  // console.log(key); // js  cpp  rb css
  console.log(key, " -> ", myObject[key]); //US -> United Kingdom
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
  console.log(key); // 0 , 1 , 2, 3 ,4
  console.log(programming[key]); // index and value
}



// object ===  for in 
// array, strings, maps, sets  ===   for of 