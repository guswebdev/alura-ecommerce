import { validarCategoriaProducto } from "./js/validarCategoriaProducto.js"
import { validarDescripcionProducto } from "./js/validarDescripcionProducto.js"
import { validarNombreProducto } from "./js/validarNombreProducto.js"
import { validarPrecioProducto } from "./js/validarPrecioProducto.js"

const d = document

const $formNuevoProducto = d.querySelector('[data-nuevo-producto]')

const formNuevoProducto = (e) => {
    e.preventDefault()

    const nombre = d.querySelector('[data-nuevo-producto-nombre]')
    const categoria = d.querySelector('[data-nuevo-producto-categoria]')
    const imagen = d.querySelector('[data-nuevo-producto-imagen]')
    const precio = d.querySelector('[data-nuevo-producto-precio]')
    const descripcion = d.querySelector('[data-nuevo-producto-descripcion]')
    const boton = d.querySelector('[data-nuevo-producto-btn]')
    /*
    console.log(nombre)
    console.log(categoria)
    console.log(imagen)
    console.log(precio)
    console.log(descripcion)
    */
    if(validarNombreProducto(nombre)) return
    if(validarCategoriaProducto(categoria)) return
    if(validarPrecioProducto(precio)) return
    if(validarDescripcionProducto(descripcion)) return

    console.log('Esto creo que no deberia verse')
}

$formNuevoProducto.addEventListener('submit', formNuevoProducto)