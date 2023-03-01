const data = {
  heading: "Problem Name",
  enableDropdown: false, // Set this to false to disable dropdown and enable input field

  // Dropdown data
  dropdownValues: [
    { dropdownLabel: "", dropdownName: "", dropdownOptions: [], dropdownPlaceholder: "" }

  ],
  inputs: [
  {label: "Num1", type: "number", name: "num1", placeholder: "Enter the Number"},
  {label: "Num2", type: "number", name: "num2", placeholder: "Enter the Number"}
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
  const multiplication = num1 * num2;
  document.getElementById("multiplication").innerHTML = multiplication;
  

}
