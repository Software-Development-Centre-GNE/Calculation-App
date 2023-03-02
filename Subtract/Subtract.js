const data = {
  heading: "Subtract Number",
  enableDropdown: false, // Set this to false to disable dropdown and enable input field

  // Dropdown data
  dropdownValues: [
    { dropdownLabel: "", dropdownName: "", dropdownOptions: [], dropdownPlaceholder: "" }

  ],
	// Input 
  inputs: [
  {label: "num1", type: "number", name: "num1", placeholder: "Enter Number"},
  {label: "num2", type: "number", name: "num2", placeholder: "Enter Number"},
   ],
  calculateFunc: "yourFunctionName()",
  buttonName: "Calculate",
  resultHeading: "Results",
  results: [
    { label: "Subtraction", name: "sub" },
    
  ]
};

const template = Handlebars.compile(document.getElementById("my-template").innerHTML);

// Render the template with the data
document.getElementById("my-content").innerHTML = template(data);

function yourFunctionName() {
  

  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const sub = num1 - num2;
  document.getElementById("sub").innerHTML = sub;
  // implement your logic here

	
}
