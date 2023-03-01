
// Define data for the template
const data = {
  heading: "Area and Perimeter of a Rectangle",
  inputs: [
  { label: "Width", type: "number", name: "width", placeholder: "Enter width" },
  { label: "Height", type: "number", name: "height", placeholder: "Enter height" }
  ],
  calculateFunc: "areaPer()",
  buttonName: "Calculate",
  resultHeading: "Results",
  results: [
  { label: "Area", name: "area" },
  { label: "Perimeter", name: "perimeter" }
  ]
};

// Compile the template
const template = Handlebars.compile(document.getElementById("my-template").innerHTML);

// Render the template with the data
document.getElementById("my-content").innerHTML = template(data);

// Define a function to calculate the area and perimeter
function areaPer() {
  // Float value accepted
  const width = parseFloat(document.getElementById("width").value);
  const height = parseFloat(document.getElementById("height").value);
  // round to 2 decimal places
  const area = (width * height).toFixed(2);
  const perimeter = (2 * (width + height)).toFixed(2);
  
  document.getElementById("area").innerHTML = area;
  document.getElementById("perimeter").innerHTML = perimeter;

}