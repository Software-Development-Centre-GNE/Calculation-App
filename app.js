function areaPer() {
  var w = parseInt(document.getElementById("width").value);
  var h = parseInt(document.getElementById("height").value);
  if (w < 0 || h < 0) {
    alert("Height or width cannot be negative!");
    return;
  }

  var area = w * h;
  var perimeter = 2 * (w + h);

  var result = "Area: " + area + "   Perimeter: " + perimeter;

  document.getElementById("output").innerHTML = result;
}
