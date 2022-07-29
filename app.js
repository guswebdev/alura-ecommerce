
const d = document

const getProducts = async (e) => {
    console.log('Hola')

    try {

        const $categoryStarWar = d.querySelector('#catalogue-star-war');
        const $categoryConsolas = d.querySelector('#catalogue-consolas');
        const $categoryDiversos = d.querySelector('#catalogue-diversos');
        
        const $template = d.querySelector('#template-product').content
        const $fragment = d.createDocumentFragment()

        const res = await fetch('https://falsa-api.herokuapp.com/productsAluraGeek')
        const data = await res.json();

        const starWar = data.filter(el => el.categoria === 'star war')
        const consolas = data.filter(el => el.categoria === 'consola')
        const diversos = data.filter(el => el.categoria === 'diversos')
        

        starWar.forEach(el => {
            console.log(el)
            $template.querySelector('img').setAttribute('src',`${el.image}`)
            $template.querySelector('h3').textContent = el.nombre
            $template.querySelector('span').textContent = `USD ${el.price},00`

            let $clone = d.importNode($template,true)
            $fragment.appendChild($clone)
        })
        
        $categoryStarWar.appendChild($fragment)

        consolas.forEach(el => {
            console.log(el)
            $template.querySelector('img').setAttribute('src',`${el.image}`)
            $template.querySelector('h3').textContent = el.nombre
            $template.querySelector('span').textContent = `USD ${el.price},00`

            let $clone = d.importNode($template,true)
            $fragment.appendChild($clone)
        })
        
        $categoryConsolas.appendChild($fragment)

        diversos.forEach(el => {
            console.log(el)
            $template.querySelector('img').setAttribute('src',`${el.image}`)
            $template.querySelector('h3').textContent = el.nombre
            $template.querySelector('span').textContent = `USD ${el.price},00`

            let $clone = d.importNode($template,true)
            $fragment.appendChild($clone)
        })
        
        $categoryDiversos.appendChild($fragment)

    } catch (error) {
        
    }
}

d.addEventListener('DOMContentLoaded',getProducts)