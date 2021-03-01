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
// function holaMundo(event) {
// 	alert('Hola Mundo')
// 	console.log(event)
// }

// 73. DOM: Eventos con Parámetros y Remover Eventos

// function saludar(nombre = Desconocido, event) {
// 	alert(`Hola ${nombre}`)
// 	console.log(event)
// }

// const $eventoSemantico = document.getElementById('evento-semantico'),
// 	$eventoMultiple = document.getElementById('evento-multiple'),
// 	$eventoRemover = document.getElementById('evento-remover')

// $eventoSemantico.onclick = holaMundo
// $eventoSemantico.onclick = function (e, event) {
// 	alert('Hola Mundo manejador de eventos Semántico')
// 	console.log(e)
// 	console.log(event)
// }

// $eventoMultiple.addEventListener('click', holaMundo)
// $eventoMultiple.addEventListener('click', (e, event) => {
// 	alert('Hola Mundo manejador de Eventos Múltiple')
// 	console.log(e)
// 	console.log(e.type)
// 	console.log(e.target)
// 	console.log(event)
// })
// $eventoMultiple.addEventListener('click', function (event) {
// 	saludar(event)
// })
// $eventoMultiple.addEventListener('click', event => {
// 	saludar(event)
// 	saludar('Jon')
// })

// const removerDobleClick = e => {
// 	alert(`Removiendo el evento de tipo ${e.type}`)
// 	console.log(e)
// 	$eventoRemover.removeEventListener('dblclick', removerDobleClick)
// 	$eventoRemover.disabled = true
// }

// $eventoRemover.addEventListener('dblclick', removerDobleClick)

// 74. DOM: Flujo de Eventos (Burbuja y captura)

/*





*/
// const $divsEventos = document.querySelectorAll('.eventos-flujo div')
// $linkEventos = document.querySelector('.eventos-flujo a')

// function flujoEventos(e) {
// 	// console.log(
// 	// 	`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
// 	// )
// 	console.log(
// 		`Hola te saluda ${this}, el click lo originó ${e.target.className}`
// 	)
// 	// e.stopPropagation()
// }

// console.log($divsEventos)

// $divsEventos.forEach(div => {
// 	// Fase de burbúja
// 	div.addEventListener('click', flujoEventos)
// 	// div.addEventListener('click', flujoEventos, false)
// 	// Fase de captura
// 	// div.addEventListener('click', flujoEventos, true)
// 	// div.addEventListener('click', flujoEventos, {
// 	// 	capture: false,
// 	// 	once: true,
// 	// })
// })

// 75. DOM: StopPropagation & preventDefault

// $linkEventos.addEventListener('click', e => {
// 	alert('Hola soy tu amigo y docente digital...Jonathan Mircha')
// 	e.preventDefault()
// })

// 75. DOM: Delegacción y eventos

// document.addEventListener('click', e => {
// 	console.log('Click en', e.target)

// 	if (e.target.matches('.eventos-flujo div')) {
// 		flujoEventos(e)
// 	}

// 	if (e.target.matches('.eventos-flujo a')) {
// 		alert('Hola soy tu amigo y docente digital...Jonathan Mircha')
// 		e.preventDefault()
// 	}
// })

// $divsEventos.forEach(div => {
// 	div.addEventListener('click', flujoEventos)
// })

// 77. BOM: Propiedades y Eventos

// window.addEventListener('resize', e => {
// 	console.clear()
// 	console.log('**********Evento Resize*********')
// 	console.log(window.innerWidth)
// 	console.log(window.innerHeight)
// 	console.log(window.outerWidth)
// 	console.log(window.outerHeight)
// 	console.log(e)
// })

// window.addEventListener('scroll', e => {
// 	console.clear()
// 	console.log('*********Evento Scroll*************')
// 	console.log(window.scrollX)
// 	console.log(window.scrollY)
// 	console.log(e)
// })

// window.addEventListener('load', e => {
// 	console.log('*********Evento Load*************')
// 	console.log(window.screenX)
// 	console.log(window.screenY)
// 	console.log(e)
// })

// 4(window).load()
// $(document).ready(funcion)
// $(window).on('load', funcion)

// document.addEventListener('DOMContentLoaded', e => {
// 	console.log('*********Evento DOMContentLoaded*************')
// 	console.log(window.screenX)
// 	console.log(window.screenY)
// 	console.log(e)
// })

// 78. BOM: Métodos
/*




*/
// window.alert('Alert')
// window.confirm('Confirmación')
// window.prompt('Aviso')
// alert('jon')
// const $btnAbrir = document.getElementById('abrir-ventana'),
// 	$btnCerrar = document.getElementById('cerrar-ventana'),
// 	$btnImprimir = document.getElementsByTagName('imprimir-ventana')

// let ventana

// $btnAbrir.addEventListener('click', e => {
// 	ventana = window.open('https://jonmircha.com')
// })
// $btnCerrar.addEventListener('click', e => {
// 	// window.close()
// 	ventana.close()
// })
// $btnImprimir.addEventListener('click', e => {
// 	window.print()
// })

// 79. BOM: Objetos: URL, Historia y Navegar
/*




*/
console.clear()
// console.log('*************Objeto URL (location)*************')
// console.log(location)
// console.log(location.origin)
// console.log(location.protocol)
// console.log(location.host)
// console.log(location.hostname)
// console.log(location.port)
// console.log(location.href)
// console.log(location.hash)
// console.log(location.search)
// console.log(location.pathname)
// location.reload()

// console.log('*****************Objeto Historial (history)******************')
// console.log(history)
// console.log(history.length)
// console.log(history)
// console.log(history.length)
// history.forward(1)
// history.go(-3)
// history.back(2)

// console.log('***************Objeto Navegador (navigator)****************')
// console.log(navigator)
// console.log(navigator.connection)
// console.log(navigator.geolocation)
// console.log(navigator.mediaDevice)
// console.log(navigator.mimeTypes)
// console.log(navigator.onLine)
// console.log(navigator.serviceWorker)
// console.log(navigator.storage)
// console.log(navigator.usb)
// console.log(navigator.userAgent)
