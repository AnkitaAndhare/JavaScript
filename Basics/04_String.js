const name = "Ankita"
const repoCount = 50

console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gamename = new String('Ankita A');
console.log(gamename);

console.log(gamename[0]);
console.log(gamename.__proto__); 

console.log(gamename.length);
console.log(gamename.toLowerCase);

console.log(gamename.charAt(5));
console.log(gamename.indexOf('t'));


const newstring = gamename.substring(0,4); // no -ve number
console.log(newstring); 

 const anotherstring = gamename.slice(-1);
 console.log(anotherstring);

 const newstring1 = " Ankita   ";
 console.log(newstring1);
 console.log(newstring.trim());   // rr=emove space

 const url = "https://ankita.com/ankita%20andhare"
 console.log(url.replace('%20', '-'));

 console.log(url.includes('ankita')); //true

 console.log(gamename.split('-'));