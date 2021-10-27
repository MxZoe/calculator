function add(number1, number2){
  return number1 + number2;
}

const num1 = parseInt(prompt("Enter a number: "));
const num2 = parseInt(prompt("Enter a second number: "));
const result = add(num1, num2);

alert(result);