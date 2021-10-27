function add(number1, number2){
  return number1 + number2;
}

function subtract(number1, number2){
  return number1 - number2;
}

function multiply(number1, number2){
  return number1 * number2;
}

function divide(number1, number2){
  return number1 / number2;
}


const num1 = parseInt(prompt("Enter a number: "));
const num2 = parseInt(prompt("Enter a second number: "));
const resultAdd = add(num1, num2);
const resultSub = subtract(num1,num2);
const resultMult = multiply(num1,num2);
const resultDiv = divide(num1, num2);

alert("addition: " + resultAdd + ", " + "subtraction: " + resultSub + ", " +
"multiplication: " + resultMult + ", " + "division: " + resultDiv + ".");