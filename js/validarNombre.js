export const validarNombre = (e) => {
    const regExpr = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g;

    if (
      e.target.value === "" ||
      e.target.value.length > 40 ||
      !regExpr.test(e.target.value)
    ) {
      e.target.nextElementSibling.classList.remove("d-none");
      return false;
    } else {
      e.target.nextElementSibling.classList.add("d-none");
      return true;
    }
}