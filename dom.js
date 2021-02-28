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
// const $figure = document.createElement('figure'),
// 	$img = document.createElement('img'),
// 	$figcaption = document.createElement('figcaption'),
// 	$figcaptionText = document.createTextNode('Animals')
// $cards = document.querySelector('.cards')
// $figure2 = document.createElement('figure')

// $img.setAttribute('src', 'https://placeimg.com/200/200/animals')
// $img.setAttribute('alt', 'Animals')
// $figure.classList.add('card')

// $figcaption.appendChild($figcaptionText)
// $figure.appendChild($img)
// $figure.appendChild($figcaption)
// $cards.appendChild($figure)

// $figure2.innerHTML = `
// <img src="https://placeimg.com/200/200/people" alt="People">
// <figcaption>People</figcaption>
// `

// $figure2.classList.add('card')
// $cards.appendChild($figure2)

// const estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'],
// 	$ul = document.createElement('ul')

// document.write('<h3>Estaciones del año</h3>')
// document.body.appendChild($ul)

// estaciones.forEach(el => {
// 	const $li = document.createElement('li')
// 	$li.textContent = el
// 	$ul.appendChild($li)
// })

// const continentes = ['África', 'América', 'Asia', 'Europa', 'Oceanía'],
// 	$ul2 = document.createElement('ul')

// document.write('<h3>Continentes del Mundo</h3>')
// document.body.appendChild($ul2)
// $ul2.innerHTML = ''
// continentes.forEach(el => ($ul2.innerHTML += `<li>${el}</li>`))

// const meses = [
// 		'Enero',
// 		'Febrero',
// 		'Marzo',
// 		'Abril',
// 		'Mayo',
// 		'Junio',
// 		'Julio',
// 		'Septiembre',
// 		'Octubre',
// 		'Noviembre',
// 		'Diciembre',
// 	],
// 	$ul3 = document.createElement('ul'),
// 	$fragment = document.createDocumentFragment()

// meses.forEach(el => {
// 	const $li = document.createElement('li')
// 	$li.textContent = el
// 	$fragment.appendChild($li)
// })

// document.write('<h3>Meses del Año</h3>')
// $ul3.appendChild($fragment)
// document.body.appendChild($ul3)

// 69. DOM: Templates HTML

// const $cards = document.querySelector('.cards'),
// 	$template = document.getElementById('template-card').content,
// 	$fragment = document.createDocumentFragment()
// cardContent = [
// 	{
// 		title: 'Tecnología',
// 		img: 'https://placeimg.com/200/200/tech',
// 	},
// 	{
// 		title: 'Animales',
// 		img: 'https://placeimg.com/200/200/animals',
// 	},
// 	{
// 		title: 'Arquitectura',
// 		img: 'https://placeimg.com/200/200/arch',
// 	},
// 	{
// 		title: 'Gente',
// 		img: 'https://placeimg.com/200/200/people',
// 	},
// 	{
// 		title: 'Naturaleza',
// 		img: 'https://placeimg.com/200/200/nature',
// 	},
// ]

// cardContent.forEach(el => {
// 	$template.querySelector('img').setAttribute('src', el.img)
// 	$template.querySelector('img').setAttribute('alt', el.title)
// 	$template.querySelector('figcaption').textContent = el.title

// 	let $clone = document.importNode($template, true)
// 	$fragment.appendChild($clone)
// })

// $cards.appendChild($fragment)

// 70. DOM: Modificando Elementos (Old Style)

// const $cards = document.querySelector('.cards'),
// 	$newCard = document.createElement('figure'),
// 	$cloneCards = $cards.cloneNode(true)

// $newCard.innerHTML = `
// <img src="http://placeimg.com/200/200/any" alt="Any">
// <figcaption>Any</figcaption>
// `
// $newCard.classList.add('card')

// // $cards.replaceChild($newCard, $cards.children[2])
// $cards.removeChild($cards.lastElementChild)
// // $cards.insertBefore($newCard, $cards.firstElementChild)
// document.body.appendChild($cloneCards)

// 71. DOM: Modificando ELementos (Cool Style)

/*
.insertAdjacent...
    .insertAdjacentElement(position, el)
    insertAdjacentHTML(position, html)
    insertAdjacentText(position, text)

Posiciones:
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforeend(último hijo)
    afterend(hermano siguiente)
*/

// const $cards = document.querySelector('.cards'),
// 	$newCard = document.createElement('figure')

// let $contentCard = `
// <img src="http://placeimg.com/200/200/any" alt="Any">
// <figcaption></figcaption>
// `
// $newCard.classList.add('card')

// $newCard.insertAdjacentHTML('beforeend', $contentCard)
// $newCard.querySelector('figcaption').insertAdjacentText('afterbegin', 'Any')
// $cards.insertAdjacentElement('afterend', $newCard)

// $cards.prepend($newCard)
// $cards.append($newCard)
// $cards.before($newCard)
// $cards.after($newCard)

// 72. DOM: Manejadores de Elementos

/*

// event deprecated
<!-- pasar el evento explícitamente -->

// in HTML
<button onclick="holaMundo(event)">Evento con atributo HTML</button>

// in javascript
function holaMundo(event) { 
      alert('Hola Mundo');
      console.log(event);
}



*/
function holaMundo(event) {
	alert('Hola Mundo')
	console.log(event)
}

const $eventoSemantico = document.getElementById('evento-semantico'),
	$eventoMultiple = document.getElementById('evento-multiple')

$eventoSemantico.onclick = holaMundo
$eventoSemantico.onclick = function (e, event) {
	alert('Hola Mundo manejador de eventos Semántico')
	console.log(e)
	console.log(event)
}

$eventoMultiple.addEventListener('click', holaMundo)
$eventoMultiple.addEventListener('click', (e, event) => {
	alert('Hola Mundo manejador de Eventos Múltiple')
	console.log(e)
	console.log(e.type)
	console.log(e.target)
	console.log(event)
})
