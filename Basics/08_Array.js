const marvel_heroes = ["thor", "ironman", "spidernman"]
const dc = ["superman", "flash", "batman"]

marvel_heroes.push(dc)  //[ 'thor', 'ironman', 'spidernman', [ 'superman', 'flash', 'batman' ] ]

console.log(marvel_heroes);

console.log(marvel_heroes[3]);
console.log(marvel_heroes[3][1]);

const allheors = marvel_heroes.concat(dc)
console.log(allheors); // [ 'thor', 'ironman', 'spidernman', 'superman', 'flash', 'batman' ]

const allnewhroes = [...marvel_heroes, ...dc] // spread operator
console.log(allnewhroes); //[ 'thor', 'ironman', 'spidernman', 'superman', 'flash', 'batman' ]

console.log(Array.isArray("ankita"));  // false
console.log(Array.from("ankita")); // [ 'a', 'n', 'k', 'i', 't', 'a' ]

console.log(Array.from({name:"ankita"})); // [] not possible to convert obj to array

let score1 = 100;
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  //[ 100, 200, 300 ]

