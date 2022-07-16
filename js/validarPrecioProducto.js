export const validarPrecioProducto = (input) => {
    const value = input.value;
  
    const regExpr = /^[0-9]*(\.?)[ 0-9]+$/g;
  
    if (
      value === "" ||
      !regExpr.test(value)
    ) {
      input.nextElementSibling.classList.remove("d-none");
      return true;
    } else {
      input.nextElementSibling.classList.add("d-none");
      return false;
    }
  };
  