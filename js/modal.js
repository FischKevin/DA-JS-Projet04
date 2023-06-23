function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// Close modal
function closeModal() {
  modalbg.style.display = "none";
}

// -----------------------------------------------------------------

// Form elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const city = document.getElementsByName("location");
const checkbox1 = document.getElementById("checkbox1");
const submitButton = document.getElementById("btn-submit");

// Regex to veriy :
// - firstname and lastname
const regexFirstnameAndLastname = /^.{2,}$/;
// - email RFC2822
const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
// - GameOn events quantity 
const regexQuantity = /^\d+$/;

// Event listener on submit form button
document.getElementById("btn-submit").addEventListener("click", submitForm); 

// Function to submit the form
function submitForm() {
  if (checkFirstName() === true && checkLastName() === true && checkEmail() === true && checkQuantity() === true) {
    console.log("Submit ok");
  } else {
    console.log("Submit ko");
  }
}

// Check first name > 2 characters
function checkFirstName() {
  const firstNameInput = firstName.value;
  console.log(regexFirstnameAndLastname.test(firstNameInput));
  return regexFirstnameAndLastname.test(firstNameInput);
}

// Check last name > 2 characters
function checkLastName() {
  const lastNameInput = lastName.value;
  console.log(regexFirstnameAndLastname.test(lastNameInput));
  return regexFirstnameAndLastname.test(lastNameInput);
}

// Check email
function checkEmail() {
  const emailInput = email.value;
  console.log(regexEmail.test(emailInput));
  return regexEmail.test(emailInput);
}

// Check quantity
function checkQuantity() {
  const quantityInput = quantity.value;
  console.log(regexQuantity.test(quantityInput));
  return regexQuantity.test(quantityInput);
}

// Check birthdate
function checkBirthdate() {

}

// Check city
function checkCity() {

}

// Check checkbox1
function checkCheckbox1() {

}


// Function validate
function validate() {

}