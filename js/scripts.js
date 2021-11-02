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

function modulo(number1, number2){
  return number1 % number2;
}



//user interface
$(document).ready(function(){
 
  $("form#add").submit(function(event) {
    const num1 = parseInt($("#add1").val());
    const num2 = parseInt($("#add2").val());
    const result = add(num1,num2);
    $("#result").text(result);
    $("#add").trigger("reset");
    event.preventDefault();
  });

  $("form#subtract").submit(function(event){
    const num1 = parseInt($("#subtract1").val());
    const num2 = parseInt($("#subtract2").val());
    const result = subtract(num1,num2);
    $("#result").text(result);
    $("#subtract").trigger("reset");
    event.preventDefault();
  });
});
