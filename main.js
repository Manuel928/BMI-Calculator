const kgButton = document.getElementById('kg-btn');
const lbsButton = document.getElementById('lbs-btn');
const metersBtn = document.getElementById('m-btn');
const inchesBtn = document.getElementById('inch-btn');
const weightInput = document.getElementById('weight-input');
const heightInput = document.getElementById('height-input');
const calculateBtn = document.getElementById('calculate-button')
const bmiResult = document.getElementById('result')

kgButton.addEventListener('click', () => {
    kgButton.classList.add('active');
    lbsButton.classList.remove('active')
    weightInput.placeholder = 'Enter your weight in kg'
})
lbsButton.addEventListener('click', () => {
    lbsButton.classList.add('active');
    kgButton.classList.remove('active')
    weightInput.placeholder = 'Enter your weight in lbs'
})

metersBtn.addEventListener('click', () => {
    metersBtn.classList.add('active');
    inchesBtn.classList.remove('active');
    heightInput.placeholder = 'Enter your height in meters';
})
inchesBtn.addEventListener('click', () => {
    inchesBtn.classList.add('active');
    metersBtn.classList.remove('active');
    heightInput.placeholder = 'Enter your height in inches';
})

const calculateBMI = () => {
    calculateBtn.addEventListener('click', () => {
        const weightInputValue = parseFloat(weightInput.value);
        const heightInputValue = parseFloat(heightInput.value);

        if (isNaN(weightInput) || weightInput == "" || isNaN(heightInput) || heightInput == "") {
            bmiResult.textContent = 'Please enter valid values and select one weight measurement (kg or lbs) & height (m or inches)';
            // Set a red border color
            weightInput.style.border = '1px solid #ec2525ee'
            heightInput.style.border = '1px solid #ec2525ee'
        }
        if (kgButton.classList.contains('active') && metersBtn.classList.contains('active')) {
            calculateKgAndM();
        }
        else if (kgButton.classList.contains('active') && inchesBtn.classList.contains('active')) {
            calculateKgAndInch();
        }
        else if (lbsButton.classList.contains('active') && inchesBtn.classList.contains('active')) {
            calculateLbsAndInch();
        }
        else if (lbsButton.classList.contains('active') && metersBtn.classList.contains('active')) {
            calculateLbsAndM();
        }
    })
    return bmiResult;
}

// Function to change border color when values have been set on input change
function changeBorderColor() {
    weightInput.addEventListener('input', () => {
        weightInput.style.border = 'none';
    })
    heightInput.addEventListener('input', () => {
        heightInput.style.border = 'none';
    })
}

// Calculate the values of kg & meters when selected
const calculateKgAndM = () => {
    const weightInputValue = parseFloat(weightInput.value);
    const heightInputValue = parseFloat(heightInput.value);
    if (isNaN(weightInput) || weightInput == "" || isNaN(heightInput) || heightInput == "") {
        bmiResult.textContent = 'Please enter some values';
        weightInput.style.border = '1px solid #ec2525ee'
        heightInput.style.border = '1px solid #ec2525ee'
    }
    // Remove the red border color if values have been set
    weightInput.style.border = 'none'
    heightInput.style.border = 'none'

    const kgAndM = weightInputValue / (heightInputValue * heightInputValue);
    kgAndM < 18.5 ? bmiResult.textContent = `BMI: ${kgAndM.toFixed(2)} (Underweight)` : kgAndM >= 18.5 && kgAndM <= 24.9 ? bmiResult.textContent = `BMI: ${kgAndM.toFixed(2)} (Normal)` : kgAndM >= 25.0 && kgAndM <= 29.9 ? bmiResult.textContent = `BMI: ${kgAndM.toFixed(2)} (Overweight)` : kgAndM >= 30.0 && kgAndM <= 34.9 ? bmiResult.textContent = `BMI: ${kgAndM.toFixed(2)} (Class I Obesity [Moderate])` : kgAndM >= 35.0 && kgAndM <= 39.9 ? bmiResult.textContent = `BMI: ${kgAndM.toFixed(2)} (Class II Obesity [Severe])` : kgAndM >= 40.0 ? bmiResult.textContent = `BMI: ${kgAndM.toFixed(2)} (Class III Obesity [Very severe])` : 'BMI error';
}

// Calculate the values of kg & inch when selected
const calculateKgAndInch = () => {
    const weightInputValue = parseFloat(weightInput.value);
    const heightInputValue = parseFloat(heightInput.value);
    if (isNaN(weightInput) || weightInput == "" || isNaN(heightInput) || heightInput == "") {
        bmiResult.textContent = 'Please enter some values';
        weightInput.style.border = '1px solid #ec2525ee'
        heightInput.style.border = '1px solid #ec2525ee'
    }
    weightInput.style.border = 'none'
    heightInput.style.border = 'none'

    const kgAndInch = weightInputValue / ((heightInputValue / 39.37) * (heightInputValue / 39.37));
    kgAndInch < 18.5 ? bmiResult.textContent = `BMI: ${kgAndInch.toFixed(2)} (Underweight)` : kgAndInch >= 18.5 && kgAndInch <= 24.9 ? bmiResult.textContent = `BMI: ${kgAndInch.toFixed(2)} (Normal)` : kgAndInch >= 25.0 && kgAndInch <= 29.9 ? bmiResult.textContent = `BMI: ${kgAndInch.toFixed(2)} (Overweight)` : kgAndInch >= 30.0 && kgAndInch <= 34.9 ? bmiResult.textContent = `BMI: ${kgAndInch.toFixed(2)} (Class I Obesity [Moderate])` : kgAndInch >= 35.0 && kgAndInch <= 39.9 ? bmiResult.textContent = `BMI: ${kgAndInch.toFixed(2)} (Class II Obesity [Severe])` : kgAndInch >= 40.0 ? bmiResult.textContent = `BMI: ${kgAndInch.toFixed(2)} (Class III Obesity [Very severe])` : 'BMI error';
}

// Calculate the values of lbs & inch when selected
const calculateLbsAndInch = () => {
    const weightInputValue = parseFloat(weightInput.value);
    const heightInputValue = parseFloat(heightInput.value);
    if (isNaN(weightInput) || weightInput == "" || isNaN(heightInput) || heightInput == "") {
        bmiResult.textContent = 'Please enter some values';
        weightInput.style.border = '1px solid #ec2525ee'
        heightInput.style.border = '1px solid #ec2525ee'
    }
    weightInput.style.border = 'none'
    heightInput.style.border = 'none'

    const lbsAndInch = (weightInputValue / (heightInputValue * heightInputValue)) * 703;
    lbsAndInch < 18.5 ? bmiResult.textContent = `BMI: ${lbsAndInch.toFixed(2)} (Underweight)` : lbsAndInch >= 18.5 && lbsAndInch <= 24.9 ? bmiResult.textContent = `BMI: ${lbsAndInch.toFixed(2)} (Normal)` : lbsAndInch >= 25.0 && lbsAndInch <= 29.9 ? bmiResult.textContent = `BMI: ${lbsAndInch.toFixed(2)} (Overweight)` : lbsAndInch >= 30.0 && lbsAndInch <= 34.9 ? bmiResult.textContent = `BMI: ${lbsAndInch.toFixed(2)} (Class I Obesity [Moderate])` : lbsAndInch >= 35.0 && lbsAndInch <= 39.9 ? bmiResult.textContent = `BMI: ${lbsAndInch.toFixed(2)} (Class II Obesity [Severe])` : lbsAndInch >= 40.0 ? bmiResult.textContent = `BMI: ${lbsAndInch.toFixed(2)} (Class III Obesity [Very severe])` : 'BMI error';
}

// Calculate the values of lbs & meters when selected
const calculateLbsAndM = () => {
    const weightInputValue = parseFloat(weightInput.value);
    const heightInputValue = parseFloat(heightInput.value);

    if (isNaN(weightInput) || weightInput == "" || isNaN(heightInput) || heightInput == "") {
        bmiResult.textContent = 'Please enter some values';
        weightInput.style.border = '1px solid #ec2525ee'
        heightInput.style.border = '1px solid #ec2525ee'
    }
    weightInput.style.border = 'none'
    heightInput.style.border = 'none'

    const lbsAndMeters = (weightInputValue * 0.45) / (heightInputValue * heightInputValue);
    lbsAndMeters < 18.5 ? bmiResult.textContent = `BMI: ${lbsAndMeters.toFixed(2)} (Underweight)` : lbsAndMeters >= 18.5 && lbsAndMeters <= 24.9 ? bmiResult.textContent = `BMI: ${lbsAndMeters.toFixed(2)} (Normal)` : lbsAndMeters >= 25.0 && lbsAndMeters <= 29.9 ? bmiResult.textContent = `BMI: ${lbsAndMeters.toFixed(2)} (Overweight)` : lbsAndMeters >= 30.0 && lbsAndMeters <= 34.9 ? bmiResult.textContent = `BMI: ${lbsAndMeters.toFixed(2)} (Class I Obesity [Moderate])` : lbsAndMeters >= 35.0 && lbsAndMeters <= 39.9 ? bmiResult.textContent = `BMI: ${lbsAndMeters.toFixed(2)} (Class II Obesity [Severe])` : lbsAndMeters >= 40.0 ? bmiResult.textContent = `BMI: ${lbsAndMeters.toFixed(2)} (Class III Obesity [Very severe])` : 'BMI error';
}

calculateBMI();
changeBorderColor();