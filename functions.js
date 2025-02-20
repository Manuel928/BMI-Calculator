export const validator = (weight, height) => {
  const weightInput = document.getElementById("weight-input");
  const heightInput = document.getElementById("height-input");
  const bmiResult = document.getElementById("result");
  if (isNaN(weight) || weight === "" || isNaN(height) || height === "") {
    bmiResult.textContent = "Please enter some values";
    weightInput.style.border = "1px solid #ec2525ee";
    heightInput.style.border = "1px solid #ec2525ee";
    return false;
  }
  weightInput.style.border = "none";
  heightInput.style.border = "none";
  return true;
};
