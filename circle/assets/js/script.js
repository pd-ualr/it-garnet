$("#CircleForm").validate({});

function displayDiameter {
    if ($("#CircleForm").valid) {
        // turns the ID diameter into blank before doing the calculation
        document.getElementById("diameter").innerHTML = "";
        
        // defines the values
        var radius;
        var radiusFp;
        var diameter;
        var result;

        // gets the value of the radius
        radius = document.getElementById("radius").value;

        // converts the number from strings to Floating Point
        radiusFp = parseFloat(radius);

        // calculate the radius d=2r
        diameter = radiusFp * 2 ;

        // display the raidus
        document.getElementById("diameter").innerHTMl = radius.toString();
    }
}

function clearForm() {
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").value = "";
    document.getElementById("diameter").value = "";
}