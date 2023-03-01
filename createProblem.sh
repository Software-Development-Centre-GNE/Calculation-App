#!/bin/bash

# Get input parameters
folder_name=$1
file_name="main.html"
line_to_change="app.js"
new_line="$folder_name\/$folder_name.js"

# Create folder
mkdir $folder_name
echo "Folder created: $folder_name"

# Copy file to folder and modify it
cp $file_name $folder_name/index.html
echo "File copied to folder: $folder_name/index.html"
escaped_line=$(echo "$line_to_change" | sed 's/\//\\\//g')
escaped_new_line=$(echo "$new_line" | sed 's/\$/\\\$/g')
sed -i "s/$escaped_line/$escaped_new_line/g" $folder_name/index.html

# Create new JS file in folder
touch $folder_name/$folder_name.js
echo "const data = {
  heading: \"Problem Name\",
  enableDropdown: false, // Set this to false to disable dropdown and enable input field

  // Dropdown data
  dropdownValues: [
    { dropdownLabel: \"\", dropdownName: \"\", dropdownOptions: [], dropdownPlaceholder: \"\" }

  ],
  inputs: [
  {label: \"\", type: \"\", name: \"\", placeholder: \"\"}
   ],
  calculateFunc: \"yourFunctionName()\",
  buttonName: \"Calculate\",
  resultHeading: \"Results\",
  results: [
    { label: \"\", name: \"\" },
    
  ]
};

const template = Handlebars.compile(document.getElementById(\"my-template\").innerHTML);

// Render the template with the data
document.getElementById(\"my-content\").innerHTML = template(data);

function yourFunctionName() {
  
  // implement your logic here

}" > $folder_name/$folder_name.js
echo "New JS file created in folder: $folder_name/$folder_name.js"
