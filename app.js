function areaPer() {
  var w = parseFloat(document.getElementById("width").value);
  var h = parseFloat(document.getElementById("height").value);
  if (w < 0 || h < 0) {
    alert("Height or width cannot be negative!");
    return;
  }

  // Calculate area and perimeter and round to 3 decimal places
  var area = Math.round(w * h * 1000) / 1000;
  var perimeter = Math.round((w + h) * 2 * 1000) / 1000;

  // Display results
  document.getElementById("area").innerHTML = area.toFixed(2);
  document.getElementById("perimeter").innerHTML = perimeter.toFixed(2);
  document.getElementById("area-mobile").innerHTML = area.toFixed(2);
  document.getElementById("perimeter-mobile").innerHTML = perimeter.toFixed(2);
  
  // Clear input fields
  document.getElementById("width").value = "";
  document.getElementById("height").value = "";
}

function sum() {
var num1 = parseFloat(document.getElementById("num1").value);
var num2 = parseFloat(document.getElementById("num2").value);

// add two numbers
var sum = Math.round((num1 + num2) * 1000) / 1000;

// display the sum
  document.getElementById("sum").innerHTML = sum.toFixed(4);
  }
