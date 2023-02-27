function areaPer(){
  var w = document.getElementById("width").value;
  var h = document.getElementById("height").value;
  
  var area = w * h;
  var perimeter = w *2 + h*2;
  
  var result = "Area: " + area + " Perimeter: " + perimeter;
  
  document.getElementById("output").innerHTML = result; 
}
