function Close() {
  document.getElementById("form2").style.scale = "0";

  document.getElementById("form").style.scale = "0";
}
function Focus(id) {
  document.getElementById(id).classList.add("styles");
}
function focusOut(id) {
  document.getElementById(id).classList.remove("styles");
  document.getElementById(id).style.transition = "0.5s";
}

const loginForm = document.getElementById("form");
const registerForm = document.getElementById("form2");
function switchToRegister() {
  loginForm.classList.add("d-none");
  registerForm.classList.remove("d-none");
  registerForm.classList.add("d-block");
}
function switchToLogin() {
  loginForm.classList.add("d-block");
  loginForm.classList.remove("d-none");
  registerForm.classList.add("d-none");
  registerForm.classList.remove("d-block");
}
function Login() {
  loginForm.style.scale = "1";
  loginForm.style.transition = "0.5s";
}
