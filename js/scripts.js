//business logic
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




//user interface
$(document).ready(function(){
 
  $("form#formOne").submit(function(event) {
    const num1 = parseInt($("#numOne").val());
    const num2 = parseInt($("#numTwo").val());
    const result = add(num1,num2);
    $("#result").text(result);
    $("#formOne").trigger("reset");
    event.preventDefault();
  });

});
