
<script>
// JavaScript code from Code 1...
// Repeat similar entries for other drivers

function login() {
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;

// Assuming driverList is the array of drivers you provided
var driver = driverList.find(d => d.name === username && d.id === password);

if (driver) {
// Redirect to another form and display driver name and number
showDriverDetails(driver);
} else {
alert('Invalid credentials. Please try again.');
}
}

function showDriverDetails(driver) {
// Hide the login form
document.getElementById('loginForm').style.display = 'none';

// Create a new form to display driver details
var detailsForm = document.getElementById('detailsForm');
detailsForm.style.display = 'block';

// Display driver name
var nameLabel = document.createElement('label');
nameLabel.textContent = 'Driver Name:';
detailsForm.appendChild(nameLabel);

var nameInput = document.createElement('input');
nameInput.value = driver.name;
nameInput.setAttribute('readonly', true);
detailsForm.appendChild(nameInput);

detailsForm.appendChild(document.createElement('br'));

// Display driver number
var numberLabel = document.createElement('label');
numberLabel.textContent = 'Number:';
detailsForm.appendChild(numberLabel);

var numberInput = document.createElement('input');
numberInput.value = driver.number;
numberInput.setAttribute('readonly', true);
detailsForm.appendChild(numberInput);
}

// Integrated code for login success and displaying form from Code 2



function login() {
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;

// Assuming driverList is the array of drivers you provided
var driver = driverList.find(d => d.name === username && d.id === password);

if (driver) {
// Hide login form
document.getElementById('loginForm').style.display = 'none';

// Display details form
document.getElementById('detailsForm').style.display = 'block';

// Populate driver details
document.getElementById('driverName').value = driver.name;
document.getElementById('driverNumber').value = driver.number;

// Display receipt
document.querySelector('.receipt').style.display = 'block';
} else {
alert('Invalid credentials. Please try again.');
}
}




function generatePDF() {
const receipt = document.querySelector('.receipt');
const options = {
margin: 20,
filename: 'receipt.pdf',
image: {
type: 'jpeg',
quality: 0.98
},
html2canvas: {
scale: 2
},
jsPDF: {
unit: 'mm',
format: 'a4',
orientation: 'portrait'
}
};
html2pdf().from(receipt).set(options).save();
}






// Driver list with names and numbers

var driverList = [{
id: "009", name: "Muneer", number: "6238869710"
},
// ... Contin
// Add more driver entries as needed
];

// Function to populate driver names in select options
function populateDriverNames() {
var driverIdSelect = document.getElementById("driverId");

driverList.forEach(function(driver) {
var option = document.createElement("option");
option.value = driver.id;
option.text = driver.id;
driverIdSelect.appendChild(option);
});
}





// Function to retrieve driver details by ID
function getDriverDetails(driverId) {
var driver = driverList.find(function(driver) {
return driver.id === driverId;
});

if (driver) {
return {
name: driver.name,
number: driver.number
};
}

return "";
}

// Call the function to populate the driver names
populateDriverNames();

// Get the driver ID select element and driver name/number input fields
var driverIdSelect = document.getElementById("driverId");
var driverNameInput = document.getElementById("driverName");
var driverNumberInput = document.getElementById("driverNumber");

// Add event listener for the change event
driverIdSelect.addEventListener("change", function() {
// Get the selected driver ID
var selectedDriverId = driverIdSelect.value;

// Retrieve the driver details
var driverDetails = getDriverDetails(selectedDriverId);

if (driverDetails) {
// Set the driver name and number in the input fields
driverNameInput.value = driverDetails.name;
driverNumberInput.value = driverDetails.number;
} else {
// Clear the driver name and number input fields
driverNameInput.value = "";
driverNumberInput.value = "";
}
});

// Rest of your JavaScript code for generating PDF
function generatePDF() {
const receipt = document.querySelector('.receipt');
const options = {
margin: [10, 10, 10, 10],
filename: 'receipt.pdf',
image: {
type: 'jpeg', quality: 0.98
},
html2canvas: {
scale: 2
},
jsPDF: {
unit: 'mm', format: 'a4', orientation: 'portrait'
}
};
html2pdf().from(receipt).set(options).save();
}



function submitForm() {
const scriptURL = 'https://script.google.com/macros/s/AKfycbxDOGVxgdlweyLVyC8CEnXP2R_tlmgvDiOo9Y5PPWnoodKXHjUpLYpiqfCP9SpcoXbYvw/exec';
const form = document.forms['submit-to-google-sheet'];

fetch(scriptURL, {
method: 'POST',
body: new FormData(form)
})
.then(response => console.log('Success!', response))
.catch(error => console.error('Error!', error.message));
}











function clearForm() {
const inputFields = document.querySelectorAll('input:not(#downloadButton,#clearButton), select, textarea');
inputFields.forEach(input => {
input.value = '';
});
}

// Rest of your JavaScript code



function showDriverDetails(driver) {
// ... (existing code)

// Display Yathracab ID
document.getElementById("driverId").value = driver.id;

// ... (existing code)
}


</script>