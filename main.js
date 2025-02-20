import * as data from './calculate.js';
const weightInput = document.getElementById("weight-input");
const heightInput = document.getElementById("height-input");

// Function to change border color when values have been set on input change
function changeBorderColor() {
  weightInput.addEventListener("input", () => {
    weightInput.style.border = "none";
  });
  heightInput.addEventListener("input", () => {
    heightInput.style.border = "none";
  });
}

changeBorderColor();