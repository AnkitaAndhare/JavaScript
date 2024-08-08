// generate random color

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#"; //initialized with #, which is the prefix for hexadecimal color
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());

let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);

// Functions should be defined before they are used in event listeners.

/*
Math.random()=>  generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

Math.random() * 16  =>  scales this number to be between 0 (inclusive) and 16 (exclusive).

Math.floor(Math.random() * 16)  => rounds down to the nearest whole number, giving a random integer between 0 and 15 (inclusive).

hex[Math.floor(Math.random() * 16)] =>  picks a random character from the hex string.
This character is appended to the color string.
*/
