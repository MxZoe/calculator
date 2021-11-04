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

function selection(num1, num2){
  if($("input:checked").val() == "add"){
    return add(num1, num2);

  }
  else if($("input:checked").val() == "subtract"){
    return subtract(num1, num2);
  }
  else if($("input:checked").val() == "multiply"){
    return multiply(num1, num2);
  }
  else{
    return divide(num1, num2);
  };
}



//user interface
$(document).ready(function(){
 
  $("form#formOne").submit(function(event) {
    const num1 = parseInt($("#numOne").val());
    const num2 = parseInt($("#numTwo").val());
    let result = selection(num1, num2);
    $("#result").text(result);
    $("#formOne").trigger("reset");
    event.preventDefault();
  });

});
