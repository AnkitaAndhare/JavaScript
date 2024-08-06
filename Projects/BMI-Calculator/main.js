const form = document.querySelector("form");
// this will give you empty value
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid height ${weight}`;
  } else{
    const bmi = (weight / ((height * height)/ 10000)).toFixed(2)
    // show reults
    results.innerHTML = `<span> ${bmi} </span>`

    let resultText;
  
    if (bmi < 18.6) {
        resultText = `You are Underweight with a BMI of ${bmi}`;
      } else if (bmi >= 18.6 && bmi <= 24.9) {
        resultText = `You are in the Normal Range with a BMI of ${bmi}`;
      } else {
        resultText = `You are Overweight with a BMI of ${bmi}`;
      }

      results.innerHTML = `<span> ${resultText} </span>`
}
});

