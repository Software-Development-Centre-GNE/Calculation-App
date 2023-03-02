const data = {
  heading: "Multiplication of 4 numbers",
  enableDropdown: false, // Set this to false to disable dropdown and enable input field

  // Dropdown data
  dropdownValues: [
    { dropdownLabel: "", dropdownName: "", dropdownOptions: [], dropdownPlaceholder: "" }

  ],
  inputs: [
  {label: "Number 1", type: "number", name: "num1", placeholder: "Enter the Number"},
  {label: "Number 2", type: "number", name: "num2", placeholder: "Enter the Number"},
  {label: "Number 3", type: "number", name: "num3", placeholder: "Enter the Number"},
  {label: "Number 4", type: "number", name: "num4", placeholder: "Enter the Number"}
   ],
  calculateFunc: "multiply()",
  buttonName: "Calculate",
  resultHeading: "Result",
  results: [
    { label: "Multiplication", name: "multiplication" }
    
  ]
};

const template = Handlebars.compile(document.getElementById("my-template").innerHTML);

// Render the template with the data
document.getElementById("my-content").innerHTML = template(data);

function multiply() {
  
  // implement your logic here
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const num3 = parseInt(document.getElementById("num3").value);
  const num4 = parseInt(document.getElementById("num4").value);
  
  const multiplication = num1 * num2 * num3 * num4;
  document.getElementById("multiplication").innerHTML = multiplication;
  

}
