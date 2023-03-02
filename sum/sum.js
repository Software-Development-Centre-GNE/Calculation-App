// Define data for the template
const data = {
  heading: "Add Two Numbers",
  enableDropdown: true, // Set this to false to disable dropdown and enable input field
  
  // Dropdown data
  dropdownValues : [
    { dropdownLabel: "Number 1", dropdownName: "number1", dropdownOptions: [1, 2, 3, 4, 5], dropdownPlaceholder: "Select a number" },
    { dropdownLabel: "Number 2", dropdownName: "number2", dropdownOptions: [1, 2, 3, 4, 5], dropdownPlaceholder: "Select a number"}

  ],
  // Input data
  inputs: [
    { label: "Number 1", name: "number1", type: "number", placeholder: "Enter a number" },
    { label: "Number 2", name: "number2", type: "number", placeholder: "Enter a number" },
  ],

  calculateFunc: "addNumbers()",
  buttonName: "Add",
  resultHeading: "Result",
  results: [
    { label: "Sum", name: "sum" }
  ]
};

// Compile the template
const template = Handlebars.compile(document.getElementById("my-template").innerHTML);

// Render the template with the data
document.getElementById("my-content").innerHTML = template(data);

// Define the function to add the two numbers
function addNumbers() {
  num1 = parseInt(document.getElementById("number1").value);
  num2 = parseInt(document.getElementById("number2").value);

  const sum = num1 + num2;
  document.getElementById("sum").innerHTML = sum;
}
