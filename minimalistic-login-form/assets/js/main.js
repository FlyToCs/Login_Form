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