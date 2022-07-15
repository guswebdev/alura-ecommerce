import { validarCorreo } from "./js/validarCorreo.js";
import { validarContraseña } from "./js/validarContraseña.js";

const d = document;
const $formLogin = d.querySelector("[data-form-login]");
const $formLoginEmail = d.querySelector("[data-login-email]");
const $formLoginPassword = d.querySelector("[data-login-password]");
const $formLoginBtn = d.querySelector("[data-login-btn]");
const $formLoginError = d.querySelector('[data-login-error]');

let emailValid = false;
let passwordValid = false;
let userValid = false;

const formLoginBlur = (e) => {
  if (e.target.matches("[data-login-email]")) {
    emailValid = validarCorreo(e);
  }

  if (e.target.matches("[data-login-password]")) {
    passwordValid = validarContraseña(e);
  }

  if (emailValid && passwordValid) {
    $formLoginBtn.disabled = false;
  }
};

$formLogin.addEventListener("blur", formLoginBlur, true);

const submitLogin = async (e) => {
  try {
    e.preventDefault();

    const res = await fetch("../assets/json/data.json");
    const json = await res.json();

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

   
    json.forEach(el => {

        if(el.email === $formLoginEmail.value && el.password === parseInt($formLoginPassword.value)){
            userValid = true;
        }

    })

    if(userValid){
        $formLoginError.classList.add('d-none')
        location.href = `../views/admin.html`
    } else {
        $formLoginError.classList.remove('d-none')
    }

  } catch (error) {
    let message = error.statusText || "Ocurrió un error";
    console.log(message);
  }
};

d.addEventListener("submit", submitLogin);
