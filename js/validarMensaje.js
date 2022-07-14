export const validarMensaje = (e) => {
    const regExpr = /^.{1,120}$/g;

    if (
      e.target.value === "" ||
      e.target.value.length > 120 ||
      !regExpr.test(e.target.value)
    ) {
      e.target.nextElementSibling.classList.remove("d-none");
      return false;
    } else {
      e.target.nextElementSibling.classList.add("d-none");
      return true;
    }
}