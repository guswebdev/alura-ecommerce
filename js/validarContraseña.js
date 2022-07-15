export const validarContraseña = (e) => {

    if ( e.target.value === "" ) {
      e.target.nextElementSibling.classList.remove("d-none");
      return false;
    } else {
      e.target.nextElementSibling.classList.add("d-none");
      return true;
    }
}