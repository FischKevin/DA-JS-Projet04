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
  disableSubmitButtonIfCheckbox1NotChecked();
}

// Event listener creation for Modal Form Opener Button
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// Function to open Modal Form
function launchModal() {
  modalbg.style.display = "block";
  initForm();
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

// Function to validate the form
function validate(e) {
  e.preventDefault();
    if (checkFirstName() === true && 
        checkLastName() === true && 
        checkEmail() === true && 
        checkQuantity() === true && 
        checkBirthdate() === true && 
        checkLocation() === true
      ) {
      console.log("Submit ok");
      launchConfirmModal();
    } else {
      console.log("Submit ko");
  }
}

// Check first name > 2 characters
function checkFirstName() {
  const firstNameInput = firstName.value;
  const formDataElement = formData[0];
  const isValid = regexFirstnameAndLastname.test(firstNameInput);
  if (isValid == true) {
    formDataElement.setAttribute('data-error-visible', false);
  } else {
    formDataElement.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
    formDataElement.setAttribute('data-error-visible', true);
    return false;
  }
  return isValid;
}

// // Ajout de l'erreur
// const formPrenom = document.getElementById('formPrenom');
// function ControlePrenom() {
//   if (!validerNom(prenom.value)) {
//     formPrenom.setAttribute('data-error', 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
//     formPrenom.setAttribute('data-error-visible', true);
//     //setCookie('Prénom', '', 1);
//     return false;
//   } else {
//     formPrenom.setAttribute('data-error-visible', false);
//     //setCookie('Prénom', prenom.value, 1);
//     return true;
//   };
// };


// function displayErrorMessage(message) {
//   errorMessageFirstName.textContent = message;
//   errorMessageFirstName.classList.add("error-message-visible");
//   first.setAttribute("data-error", "true");
//   textControl.forEach((element) => {
//     element.setAttribute("data-error", "true");
//   });
// }

// function clearErrorMessage() {
//   errorMessageFirstName.textContent = "";
//   first.parentElement.classList.remove("formData");
//   first.removeAttribute("data-error");
// }





















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