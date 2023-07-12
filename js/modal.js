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
const modalBtn = document.querySelectorAll(".btn-signup");
const formData = document.querySelectorAll(".formData");
const modalCloseBtn = document.querySelectorAll(".close");
const modalSubmitBtn = document.querySelectorAll(".btn-submit");
const modalbgConfirm = document.querySelector(".bground-confirm");
const modalConfirmCloseBtn = document.querySelectorAll(".close");
const modalConfirmCloseBottomBtn = document.getElementById("btn-close-confirm-modal");

// Form elements
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locationInput = document.getElementsByName("location");
const checkbox1 = document.getElementById("checkbox1");
const submitButton = document.getElementById("btn-submit");
const errorMessageFirstName = document.getElementById("error-message-firstname");
const dataError = document.querySelectorAll(".data-error");
const textControl = document.querySelectorAll(".text-control");

// Regex declaration, to veriy :
// - firstname and lastname
const regexFirstnameAndLastname = /^.{2,}$/;
// - email RFC2822
const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
// - GameOn events quantity 
const regexQuantity = /^\d+$/;
// - birthdate
const regexBirthdateYYYMMDD = /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

// Event listener creation for checkbox1
checkbox1.addEventListener("click", disableSubmitButtonIfCheckbox1NotChecked);
// Disable submit button if checkbox1 is not checked
function disableSubmitButtonIfCheckbox1NotChecked() {
  if (checkbox1.checked) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// Function to initialize form fields
function initForm() {
  checkbox1.checked = true;
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  birthdate.value = "";
  quantity.value = "";
  for (let i = 0; i < formData.length; i++) {
    formData[i].setAttribute('data-error-visible', false);
  }
  for (let i = 0; i < locationInput.length; i++) {
    locationInput[i].checked = false;
    if (locationInput[i].value === "New York") {
      locationInput[i].checked = true;
    }
  }
}

// Event listener creation for Modal Form Opener Button
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Function to open Modal Form
function launchModal() {
  modalbg.style.display = "block";
}

// Event listener creation for Modal Form X Close Button
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal));
// Function to close Modal Form
function closeModal() {
  modalbg.style.display = "none";
}

// Event listener creation for Modal Form Validation
modalSubmitBtn.forEach((btn) => btn.addEventListener("click", validate));
// Function to open Confirmation Modal
function launchConfirmModal() {
  closeModal();
  modalbgConfirm.style.display = "block";
}

// Event listener creation for modal confirmation close buttons
modalConfirmCloseBtn.forEach((btn) => btn.addEventListener("click", closeConfirmModal));
modalConfirmCloseBottomBtn.addEventListener("click", closeConfirmModal);
// Function to Close modal
function closeConfirmModal() {
  modalbgConfirm.style.display = "none";
}

// -----------------------------------------------------------------

function validate(e) {
  e.preventDefault();

  let errorExists = false;
  let isCheckboxChecked = true;

  const validationData = [
    { checkFunction: checkFirstName, errorMessage: "Veuillez entrer 2 caractères ou plus" },
    { checkFunction: checkLastName, errorMessage: "Veuillez entrer 2 caractères ou plus" },
    { checkFunction: checkEmail, errorMessage: "Veuillez entrer un email au bon format" },
    { checkFunction: checkBirthdate, errorMessage: "Veuillez entrer votre date de naissance" },
    { checkFunction: checkQuantity, errorMessage: "Veuillez entrer une valeur numérique" },
  ];

  validationData.forEach((data, index) => {
    const isValid = data.checkFunction();
    const formDataElement = formData[index];

    if (!isValid) {
      showErrorMessageIfCheckFunctionReturnsFalse(isValid, formDataElement, data.errorMessage);
      errorExists = true;
    } else {
      formDataElement.setAttribute('data-error-visible', false);
    }
  });

  if (!isCheckboxChecked) {
    errorExists = true;
    showErrorMessageIfCheckFunctionReturnsFalse(false, formData[6], "Vous devez accepter les conditions d'utilisation");
  }

  // If there is no error,submit the form and open the confirmation modal
  if (!errorExists) {
    launchConfirmModal();
    initForm();
  }
}

// Function to show error message if check function returns false
function showErrorMessageIfCheckFunctionReturnsFalse(isValid, formDataElement, errorMessage) {
  if (isValid) {
    formDataElement.setAttribute('data-error-visible', false);
  } else {
    formDataElement.setAttribute('data-error', errorMessage);
    formDataElement.setAttribute('data-error-visible', true);
  }
}

// Check first name > 2 characters
function checkFirstName() {
  const firstNameInput = firstName.value;
  const isValid = regexFirstnameAndLastname.test(firstNameInput);
  return isValid;
}

// Check last name > 2 characters
function checkLastName() {
  const lastNameInput = lastName.value;
  const isValid = regexFirstnameAndLastname.test(lastNameInput);
  return isValid;
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
