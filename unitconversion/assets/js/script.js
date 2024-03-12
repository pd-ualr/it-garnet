function calculate() {
  "use strict";
  var form = $("#myform");
  if (form.valid()) {
    var fromValue = document.getElementById("fromValue").value;
    var fromUnit;
    if (document.getElementById("fromCenti").checked) {
      fromUnit = document.getElementById("fromCenti").value;
    }
    if (document.getElementById("fromMeter").checked) {
      fromUnit = document.getElementById("fromMeter").value;
    }
    if (document.getElementById("fromKilo").checked) {
      fromUnit = document.getElementById("fromKilo").value;
    }
    if (document.getElementById("fromInch").checked) {
      fromUnit = document.getElementById("fromInch").value;
    }
    if (document.getElementById("fromFeet").checked) {
      fromUnit = document.getElementById("fromFeet").value;
    }
    if (document.getElementById("fromYard").checked) {
      fromUnit = document.getElementById("fromYard").value;
    }
    if (document.getElementById("fromMile").checked) {
      fromUnit = document.getElementById("fromMile").value;
    }

    var toUnit;
    if (document.getElementById("toCenti").checked) {
      toUnit = document.getElementById("toCenti").value;
    }
    if (document.getElementById("toMeter").checked) {
      toUnit = document.getElementById("toMeter").value;
    }
    if (document.getElementById("toKilo").checked) {
      toUnit = document.getElementById("toKilo").value;
    }
    if (document.getElementById("toInch").checked) {
      toUnit = document.getElementById("toInch").value;
    }
    if (document.getElementById("toFeet").checked) {
      toUnit = document.getElementById("toFeet").value;
    }
    if (document.getElementById("toYard").checked) {
      toUnit = document.getElementById("toYard").value;
    }
    if (document.getElementById("toMile").checked) {
      toUnit = document.getElementById("toMile").value;
    }

    CalculateResult(fromValue, fromUnit, toUnit);
  }
}

async function CalculateResult(fromValue, fromUnit, toUnit) {
  var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
  myURL =
    myURL +
    "?FromValue=" +
    encodeURIComponent(fromValue) +
    "&FromUnit=" +
    encodeURIComponent(fromUnit) +
    "&ToUnit=" +
    encodeURIComponent(toUnit);
  let myCalcObject = await fetch(myURL);
  let myResult = await myCalcObject.text();
  document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
  "use strict";
  document.getElementById("fromValue").value = "";
  document.getElementById("fromValueErrMsg").innerHTML = "";
  document.getElementById("fromCenti").checked = false;
  document.getElementById("fromMeter").checked = false;
  document.getElementById("fromKilo").checked = false;
  document.getElementById("fromInch").checked = false;
  document.getElementById("fromFeet").checked = false;
  document.getElementById("fromYard").checked = false;
  document.getElementById("fromMile").checked = false;
  document.getElementById("toCenti").checked = false;
  document.getElementById("toMeter").checked = false;
  document.getElementById("toKilo").checked = false;
  document.getElementById("toInch").checked = false;
  document.getElementById("toFeet").checked = false;
  document.getElementById("toYard").checked = false;
  document.getElementById("toMile").checked = false;
  document.getElementById("fromUnitErrMsg").innerHTML = "";
  document.getElementById("toUnitErrMsg").innerHTML = "";
  document.getElementById("Result").innerHTML = "";
}

$("#myform").validate({});