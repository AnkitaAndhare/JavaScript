const user = {
  username: "ankita",
  price: 999,
  welcomemsg: function () {
    console.log(`${this.username}, welcome to website`); // this refer to current context
    console.log(this);
  },
};

user.welcomemsg(); // ankita, welcome to website

user.username = "sam";
user.welcomemsg(); //sam, welcome to website

// console.log(this); //{}


//  function in obj only refer this keyword......in separate function we can't use it
function one() {
  let name = "ankita";
  console.log(this.name); // undefined
  console.log(this);
}

one();


// ***********************Arrow Functiion**********************//

const two = () => {
  let uername = "ankita";
  console.log(this.username); // undefined
};
two();



let user1 = {
  name: "GFG",
  gfg1: () => {
    console.log("hello " + this.name); // no 'this' binding here
  },
  gfg2() {
    console.log("Welcome to " + this.name); // 'this' binding works here
  },
};
user1.gfg1(); //hello undefined
user1.gfg2(); //Welcome to GFG





const addtwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addtwo(5, 5)); // 10



//   OR   {} then return is required () no return

const addtwo1 = (num1, num2) => (num1 + num2)
console.log(addtwo1(5, 5));

// object return
const addtwo2 = (num1, num2) => ({ name: "ankita" });
console.log(addtwo2(5, 5)); //{ name: 'ankita' }

