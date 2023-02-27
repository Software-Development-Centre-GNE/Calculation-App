function areaPer(){
  var w = document.getElementById("width").value;
  var h = document.getElementById("height").value;
  
  var area = w * h;
  var perimeter = w + w + h + h;
  
  var result = "Area: " + area + " Perimeter: " + perimeter;
  
  document.getElementById("output").innerHTML = result; 
}
