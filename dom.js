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

// const $whatIsDOM = document.getElementById('que-es')

// let text = `
//     <p>
//     El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para documentos HTML y XML.
//     </p>
//     <p>
//     Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
//     </p>
//     <p>
//     <mark> El DOM no es parte de la especificación de Javascript, es una API para los navegadores
//     </mark>
//     </p>
// `

// // $whatIsDOM.innerText = text
// $whatIsDOM.textContent = text
// $whatIsDOM.innerHTML = text
// $whatIsDOM.outerHTML = text

// 67. DOM Traversing: Recorriendo el DOM
// const $cards = document.querySelector('.cards')

// console.log($cards)
// console.log($cards.children)
// console.log($cards.children[2])
// console.log($cards.parentElement)
// console.log($cards.firstElementChild)
// console.log($cards.lastElementChild)
// console.log($cards.previousElementSibling)
// console.log($cards.nextElementSibling)
// console.log($cards.closest('div'))
// console.log($cards.closest('body'))
// console.log($cards.children[3].closest('section'))

// 68. DOM: Creando Elementos y Fragmentos
const $figure = document.createElement('figure'),
	$img = document.createElement('img'),
	$figcaption = document.createElement('figcaption'),
	$figcaptionText = document.createTextNode('Animals')
$cards = document.querySelector('.cards')
$figure2 = document.createElement('figure')

$img.setAttribute('src', 'https://placeimg.com/200/200/animals')
$img.setAttribute('alt', 'Animals')
$figure.classList.add('card')

$figcaption.appendChild($figcaptionText)
$figure.appendChild($img)
$figure.appendChild($figcaption)
$cards.appendChild($figure)

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`

$figure2.classList.add('card')
$cards.appendChild($figure2)

const estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'],
	$ul = document.createElement('ul')

document.write('<h3>Estaciones del año</h3>')
document.body.appendChild($ul)

estaciones.forEach(el => {
	const $li = document.createElement('li')
	$li.textContent = el
	$ul.appendChild($li)
})

const continentes = ['África', 'América', 'Asia', 'Europa', 'Oceanía'],
	$ul2 = document.createElement('ul')

document.write('<h3>Continentes del Mundo</h3>')
document.body.appendChild($ul2)
$ul2.innerHTML = ''
continentes.forEach(el => ($ul2.innerHTML += `<li>${el}</li>`))

const meses = [
		'Enero',
		'Febrero',
		'Marzo',
		'Abril',
		'Mayo',
		'Junio',
		'Julio',
		'Septiembre',
		'Octubre',
		'Noviembre',
		'Diciembre',
	],
	$ul3 = document.createElement('ul'),
	$fragment = document.createDocumentFragment()

meses.forEach(el => {
	const $li = document.createElement('li')
	$li.textContent = el
	$fragment.appendChild($li)
})

document.write('<h3>Meses del Año</h3>')
$ul3.appendChild($fragment)
document.body.appendChild($ul3)
