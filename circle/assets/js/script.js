$("#CircleForm").validate({});

function displayCircle() {
  if ($("#CircleForm").valid()) {
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("area").innerHTML = "";

    var radius;
    var radiusfp;
    var diameter;
    var circumference;
    var area;
    var result;

    radius = document.getElementById("radius").value;
    radiusfp = parseFloat(radius);
    diameter = calcDiameter(radius);
    document.getElementById("diameter").innerHTML = diameter.toString();
    circumference = calcCircumference(radius);
    document.getElementById("circumference").innerHTML =
      circumference.toString();
    area = calcArea(radius);
    document.getElementById("area").innerHTML = area.toString();
  }
}

function calcDiameter(r) {
  return 2 * r;
}

function calcCircumference(r) {
  return 2 * r * Math.PI;
}

function calcArea(r) {
  return Math.PI * r * r;
}

function clearForm() {
  document.getElementById("radius").value = "";
  document.getElementById("radiuserror").innerHTML = "";
  document.getElementById("diameter").innerHTML = "";
  document.getElementById("circumference").innerHTML = "";
  document.getElementById("area").innerHTML = "";
}
