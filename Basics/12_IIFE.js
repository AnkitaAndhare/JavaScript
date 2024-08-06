// Immediately Invoked Function Expression (IIFE) 
// to remove global scope pollution we used IIFE

function one() {
    console.log("DB connected1");
  }
  one();   // ; is required for more than i iife
  
  // IIFE to immediately invoke the function named iife
  (function anotherFunction() {
    console.log("DB connected2");
  })();

  // arraow fun unnamed iife
  ( (name) => {
    console.log(`db connected3 ${name}`);
  })('ankita');

  