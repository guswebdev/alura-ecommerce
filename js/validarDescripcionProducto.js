export const validarDescripcionProducto = (input) => {
    const value = input.value;
  
    const regExpr = /^.{1,120}$/g;
  
    if (
      value === "" ||
      value.length > 150 ||
      !regExpr.test(value)
    ) {
      input.nextElementSibling.classList.remove("d-none");
      return true;
    } else {
      input.nextElementSibling.classList.add("d-none");
      return false;
    }
  };
  