function login() {
  const loginbtn = document.getElementById("loginbtn");
  const emailbtn = document.getElementById("emailbtn");
  const nextbtn = document.getElementById("nextbtn");
  loginbtn.style.display = "none"
  emailbtn.style.display = "block";
  nextbtn.style.display = "block";
}
function nextbtn() {
  const emailbtn = document.getElementById("emailbtn");
  const passbtn = document.getElementById("passbtn");
  const finishbtn = document.getElementById("finishbtn");
  emailbtn.style.display = "none"
  passbtn.style.display = "block";
  finishbtn.style.display = "block";
}
function finishbtn() {
  const nextbtn = document.getElementById("nextbtn");
  const passbtn = document.getElementById("passbtn");
  const welcome = document.getElementById("welcome");
  const finishbtn = document.getElementById("finishbtn");
  nextbtn.style.display = "none"
  passbtn.style.display = "none";
  welcome.style.display = "flex";
  finishbtn.style.display = "none";
}