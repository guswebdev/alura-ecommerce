import { validarMensaje } from "./js/validarMensaje.js";
import { validarNombre } from "./js/validarNombre.js";

const d = document;
const $formContact = d.querySelector("[data-form-contact]");
const $formContactBtn = d.querySelector(".form__btn");

let nombreValid = false;
let mensajeValid = false;

const formContactBlur = (e) => {
  if (e.target.matches("[data-contact-nombre]")) {
    nombreValid = validarNombre(e);
  }

  if (e.target.matches("[data-contact-mensaje]")) {
    mensajeValid = validarMensaje(e);
  }

  if (nombreValid && mensajeValid) {
    $formContactBtn.disabled = false;
  }
};

$formContact.addEventListener("blur", formContactBlur, true);
