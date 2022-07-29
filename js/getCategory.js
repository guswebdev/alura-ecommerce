export const getCategory = (array,$nodo,$template,$fragment) => {
    console.log(array)
    array.forEach(el => {
        console.log(el)
        $template.querySelector('img').setAttribute('src',`${el.image}`)
        $template.querySelector('h3').textContent = el.nombre
        $template.querySelector('span').textContent = `USD ${el.price},00`

        let $clone = d.importNode($template,true)
        $fragment.appendChild($clone)
    })
    
    $nodo.appendChild($fragment)
}