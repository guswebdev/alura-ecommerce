export const validarCorreo = (e) => {
    
    const regExpr =
      /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/g;

    if (e.target.value === "" || !regExpr.test(e.target.value)) {
      e.target.nextElementSibling.classList.remove("d-none");
      return false;
    } else {
      e.target.nextElementSibling.classList.add("d-none");
      return true;
    }
}