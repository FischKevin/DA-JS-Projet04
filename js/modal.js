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

// Event listener on submit form button
document.getElementById("btn-submit").addEventListener("click", submitForm); 

// Function to submit the form
function submitForm() {
  if (checkFirstName() === true && checkLastName() ===true && checkEmail() ===true) {
    console.log("Submit ok");
  } else {
    console.log("Submit ko");
  }
}

// Check first name > 2 characters
function checkFirstName() {
  // let first = document.getElementById("first");
  first = String(first);
  if (first.trim() === '') {
    console.log(false);
    return false;
  } else if (first.length < 2) {
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
}

// Check last name > 2 characters
function checkLastName() {
  // let last = document.getElementById("last");
  last = String(last);
  if (last.trim() === '') {
    console.log(false);
    return false;
  } else if (last.length < 2) {
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
}

// Check email
function checkEmail() {
  // let email = document.getElementById("email");
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  console.log(regex.test(email));
  return regex.test(email);
}

// Check birthdate
function checkBirthdate() {

}

// Check quantity
function checkQuantity() {
  // let quantity = document.getElementById("quantity");
  let regex = /^\d+$/;
  console.log(regex.test(quantity));
  return regex.test(quantity);
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