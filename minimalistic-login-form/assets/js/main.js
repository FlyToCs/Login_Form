// After validating the input, this method run
function login() {
  x("login")
}

// After validating the input, this method run
function nextBtn() {
  x("nextBtn")
}

// After validating the input, this method run
function finishBtn() {
  x("finishBtn")
}

// This method takes the user to the next step by controlling the display of the element
function x(functionName) {
  const loginbtn = document.querySelector(".login-btn");
  const emailbtn = document.querySelector(".email-input");
  const nextbtn = document.querySelector(".validation-email-btn");
  const passbtn = document.querySelector(".password-input");
  const finishbtn = document.querySelector(".validation-password-btn");
  const welcome = document.querySelector(".welcome-massage");
  switch (functionName) {
    case "login":
      loginbtn.style.display = "none"
      emailbtn.style.display = "block";
      nextbtn.style.display = "block";
      break;
    case "nextBtn":
      emailbtn.style.display = "none"
      passbtn.style.display = "block";
      finishbtn.style.display = "block";
      break;
    case "finishBtn":
      nextbtn.style.display = "none"
      passbtn.style.display = "none";
      welcome.style.display = "flex";
      finishbtn.style.display = "none";
      break;
  }
}

// This method checks the input value with the pattern and if the value is allowed
// allows the user to go to the next level
function validateForm(formName, inputName, regex, functionName) {
  let inputValue = document.forms[formName][inputName].value;
  if (regex.test(inputValue)) {
    switch (functionName) {
      case "nextBtn":
        nextBtn()
        break;
      case "finishBtn":
        finishBtn()
        break;
    }
  } else {
    alert("Invalid input");
  }
}

// This method, when the user clicks on the continue button after writing her email,
// launches the email validation by providing the required parameters of the
// validateForm()
function validateEmail() {
  const regexForEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  validateForm("loginForm", "email", regexForEmail, "nextBtn");
}

// This method, when the user clicks on the continue button after writing her
// password, launches the email validation by providing the required parameters
// of the validateForm()
function validatePassword() {
  const regexForPassword = /.{8,}/;
  validateForm("loginForm", "pass", regexForPassword, "finishBtn");
}