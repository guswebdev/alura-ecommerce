export const validarImagenProducto = (input) => {
  const value = input.value;

  //const regExpr = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g;

  if (value === "") {
    input.nextElementSibling.classList.remove("d-none");
    return true;
  } else {
    input.nextElementSibling.classList.add("d-none");
    return false;
  }
};
