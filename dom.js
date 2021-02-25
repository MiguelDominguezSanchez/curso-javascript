// 60. WEB APIs

// console.log(window)
// console.log(document)
// let texto = 'Hola, soy tu amigo y docente digital... Jonathan MirCha'
// const hablar = texto =>
// 	speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
// hablar(texto)

// 61. DOM introducción

console.log('**********Elementos del documento**********')
console.log(window.document)
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype)
console.log(document.charset)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
console.log(document.scripts)
setTimeout(() => {
	console.log(document.getSelection().toString())
}, 3000)
document.write('<h2>Hola Mundo desde el DOM</h2>')
