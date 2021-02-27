// const $card = document.querySelector('.card')

// console.log($card)
// console.log($card.className)
// console.log($card.classList)
// console.log($card.classList.contains('rotate-45'))
// $card.classList.add('rotate-45')
// console.log($card.classList.contains('rotate-45'))
// console.log($card.className)
// console.log($card.classList)
// $card.classList.remove('rotate-45')
// console.log($card.classList.contains('rotate-45'))
// $card.classList.toggle('rotate-45')
// console.log($card.classList.contains('rotate-45'))
// $card.classList.toggle('rotate-45')
// console.log($card.classList.contains('rotate-45'))
// $card.classList.toggle('rotate-45')
// $card.classList.replace('rotate-45', 'rotate-135')
// $card.classList.add('opacity-80', 'sepia')

// 66. DOM: Texto y HTML

const $whatIsDOM = document.getElementById('que-es')

let text = `
    <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
    Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
    <mark> El DOM no es parte de la especificación de Javascript, es una API para los navegadores
    </mark>
    </p>
`

// $whatIsDOM.innerText = text
$whatIsDOM.textContent = text
$whatIsDOM.innerHTML = text
$whatIsDOM.outerHTML = text
