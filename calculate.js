import { validator } from "./functions.js";

const kgBtn = document.getElementById("kg-btn");
const lbsButton = document.getElementById("lbs-btn");
const metersBtn = document.getElementById("m-btn");
const inchBtn = document.getElementById("inch-btn");
const weightInput = document.getElementById("weight-input");
const heightInput = document.getElementById("height-input");
const calculateBtn = document.getElementById("calculate-button");
const bmiResult = document.getElementById("result");

kgBtn.addEventListener("click", () => {
  kgBtn.classList.add("active");
  lbsButton.classList.remove("active");
  weightInput.placeholder = "Enter your weight in kg";
});
lbsButton.addEventListener("click", () => {
  lbsButton.classList.add("active");
  kgBtn.classList.remove("active");
  weightInput.placeholder = "Enter your weight in lbs";
});

metersBtn.addEventListener("click", () => {
  metersBtn.classList.add("active");
  inchBtn.classList.remove("active");
  heightInput.placeholder = "Enter your height in meters";
});
inchBtn.addEventListener("click", () => {
  inchBtn.classList.add("active");
  metersBtn.classList.remove("active");
  heightInput.placeholder = "Enter your height in inches";
});

// Calculate the values of kg & meters when selected
const calculateKgAndM = () => {
  const weightInputValue = parseFloat(weightInput.value);
  const heightInputValue = parseFloat(heightInput.value);
  if (!validator(weightInputValue, heightInputValue)) return;
  const result = weightInputValue / (heightInputValue * heightInputValue);
  return result;
};

// Calculate the values of kg & inch when selected
const calculateKgAndInch = () => {
  const weightInputValue = parseFloat(weightInput.value);
  const heightInputValue = parseFloat(heightInput.value);

  if (!validator(weightInputValue, heightInputValue)) return;
  const result =
    weightInputValue /
    ((heightInputValue / 39.37) * (heightInputValue / 39.37));
  return result;
};

// Calculate the values of lbs & inch when selected
const calculateLbsAndInch = () => {
  const weightInputValue = parseFloat(weightInput.value);
  const heightInputValue = parseFloat(heightInput.value);
  if (!validator(weightInputValue, heightInputValue)) return;
  const result =
    (weightInputValue / (heightInputValue * heightInputValue)) * 703;
  return result;
};

// Calculate the values of lbs & meters when selected
const calculateLbsAndM = () => {
  const weightInputValue = parseFloat(weightInput.value);
  const heightInputValue = parseFloat(heightInput.value);

  if (!validator(weightInputValue, heightInputValue)) return;
  const result =
    (weightInputValue * 0.45) / (heightInputValue * heightInputValue);
  return result;
};

const formulas = {
  "kg-m": calculateKgAndM,
  "kg-inch": calculateKgAndInch,
  "lbs-inch": calculateLbsAndInch,
  "lbs-m": calculateLbsAndM,
};
const getSelectedFormula = () => {
  if (
    kgBtn.classList.contains("active") &&
    metersBtn.classList.contains("active")
  )
    return "kg-m";
  if (
    kgBtn.classList.contains("active") &&
    inchBtn.classList.contains("active")
  )
    return "kg-inch";
  if (
    lbsButton.classList.contains("active") &&
    inchBtn.classList.contains("active")
  )
    return "lbs-inch";
  if (
    lbsButton.classList.contains("active") &&
    metersBtn.classList.contains("active")
  )
    return "lbs-m";
  return null;
};

const calculateBMI = () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  if (!validator(weight, height)) return;

  const formularKey = getSelectedFormula();
  if (!formularKey) {
    bmiResult.textContent = "Please select valid weight and height units!";
    return;
  }
  const bmi = formulas[formularKey]();
  bmi < 18.5
    ? (bmiResult.textContent = `BMI: ${bmi.toFixed(2)} [Underweight]`)
    : bmi >= 18.5 && bmi <= 24.9
    ? (bmiResult.textContent = `BMI: ${bmi.toFixed(2)} [Normal]`)
    : bmi >= 20.5 && bmi <= 29.9
    ? (bmiResult.textContent = `BMI: ${bmi.toFixed(2)} [Overweight]`)
    : bmi >= 30.0 && bmi <= 34.9
    ? (bmiResult.textContent = `BMI: ${bmi.toFixed(
        2
      )} [Class 1 Obesity {Moderate}]`)
    : bmi >= 35.0 && bmi <= 39.9
    ? (bmiResult.textContent = `BMI: ${bmi.toFixed(
        2
      )} [Class 2 Obesity {Severe}]`)
    : bmi >= 40
    ? (bmiResult.textContent = `BMI: ${bmi.toFixed(
        2
      )} [Class 3 Obesity {Very Severe or morbidly Obese}]`)
    : "Error Calculating BMI";
};
calculateBtn.addEventListener("click", calculateBMI);
