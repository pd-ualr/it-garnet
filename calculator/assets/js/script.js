function calculate() {
  if ($("#myform").valid()) {
    var operand1 = document.getElementById("Operand1").value;
    var operand2 = document.getElementById("Operand2").value;

    var operand1fp = parseFloat(operand1);
    var operand2fp = parseFloat(operand2);

    var operator;
    if (document.getElementById("AddOperator").checked) {
      operator = document.getElementById("AddOperator").value;
    }
    if (document.getElementById("SubOperator").checked) {
      operator = document.getElementById("SubOperator").value;
    }
    if (document.getElementById("MultiplyOperator").checked) {
      operator = document.getElementById("MultiplyOperator").value;
    }
    if (document.getElementById("DivideOperator").checked) {
      operator = document.getElementById("DivideOperator").value;
    }

    var result;

    if (operator == "Add") {
      result = operand1fp + operand2fp;
    }

    if (operator == "Sub") {
      result = operand1fp - operand2fp;
    }

    if (operator == "Multiply") {
      result = operand1fp * operand2fp;
    }

    if (operator == "Divide") {
      result = operand1fp / operand2fp;
    }

    document.getElementById("Result").innerHTML = result.toString();
  }
}

function clearform() {
  document.getElementById("Operand1").value = "";
  document.getElementById("Operand2").value = "";
  document.getElementById("Operand1Error").innerHTML = "";
  document.getElementById("Operand2Error").innerHTML = "";
  document.getElementById("AddOperator").checked = false;
  document.getElementById("SubOperator").checked = false;
  document.getElementById("MultiplyOperator").checked = false;
  document.getElementById("DivideOperator").checked = false;
  document.getElementById("OperatorError").innerHTML = "";
  document.getElementById("Result").innerHTML = "";
}

$("#myform").validate({});
