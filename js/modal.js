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
// const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const modalSubmitBtn = document.querySelectorAll(".btn-submit");
const modalbgConfirm = document.querySelector(".bground-confirm");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// launch modal form
function launchConfirmModal() {
  console.log("launchConfirmModal OK");
  modalbgConfirm.style.display = "block";
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
const checkbox1 = document.getElementById("checkbox1");
const submitButton = document.getElementById("btn-submit");

// Regex to veriy :
// - firstname and lastname
const regexFirstnameAndLastname = /^.{2,}$/;
// - email RFC2822
const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
// - GameOn events quantity 
const regexQuantity = /^\d+$/;
// - birthdate
const regexBirthdateYYYMMDD = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;



// Function to validate the form
function validate(e) {
  e.preventDefault();
  if (checkbox1.checked) {
    if (checkFirstName() === true && checkLastName() === true && checkEmail() === true && checkQuantity() === true && checkBirthdate() === true && checkLocation() === true) {
      console.log("Submit ok");
      launchConfirmModal();
    } else {
      console.log("Submit ko");
    }
  } else {
    console.log("Submit ko");
  }
}

document.getElementsByName('reserve')[0].onsubmit = validate

// Check first name > 2 characters
function checkFirstName() {
  const firstNameInput = firstName.value;
  return regexFirstnameAndLastname.test(firstNameInput);
}

// Check last name > 2 characters
function checkLastName() {
  const lastNameInput = lastName.value;
  return regexFirstnameAndLastname.test(lastNameInput);
}

// Check email
function checkEmail() {
  const emailInput = email.value;
  return regexEmail.test(emailInput);
}

// Check quantity
function checkQuantity() {
  const quantityInput = quantity.value;
  return regexQuantity.test(quantityInput);
}

// Check birthdate
function checkBirthdate() {
  const birthdateInput = birthdate.value;
  return regexBirthdateYYYMMDD.test(birthdateInput);
}

// Check location
function checkLocation() {
  const locationInput = document.getElementsByName("location");
  for (let i = 0; i < locationInput.length; i++) {
    if (locationInput[i].checked) {
      return true; 
    }
  }
  return false;
}

// Event listener on checkbox1
checkbox1.addEventListener("click", disableSubmitButtonIfCheckbox1NotChecked);

// Disable submit button if checkbox1 is not checked
function disableSubmitButtonIfCheckbox1NotChecked() {
  if (checkbox1.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}