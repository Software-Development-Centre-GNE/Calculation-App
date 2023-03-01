// Define data for the template
const data = {
    heading: "Add Two Numbers",
    inputs: [
      { label: "Number 1", name: "number1", type: "number", placeholder: "Enter a number" },
      { label: "Number 2", name: "number2", type: "number", placeholder: "Enter a number" },
      { label: "Number 3", name: "number3", type: "number", placeholder: "Enter a number" },
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
    const num1 = parseInt(document.getElementById("number1").value);
    const num2 = parseInt(document.getElementById("number2").value);
    const num3 = parseInt(document.getElementById("number2").value);
    const sum = num1 + num2 + num3;
    document.getElementById("sum").innerHTML = sum;
  }
  