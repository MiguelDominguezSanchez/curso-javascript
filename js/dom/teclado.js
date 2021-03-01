const d = document

export function shortcuts(e) {
	console.log(e.type)
	console.log(e.key)
	console.log(e.keyCode)
	console.log(`ctrl: ${e.ctrlKey}`)
	console.log(`alt: ${e.altKey}`)
	console.log(`shift: ${e.shiftKey}`)
	console.log(e)

	// alt key compound a different special character

	if (e.key === 'a' && e.ctrlKey) {
		alert('Has lanzado una alerta con el teclado')
	}
	if (e.key === 'c' && e.ctrlKey) {
		confirm('Has lanzado una confirmación con el teclado')
	}
	if (e.key === 'p' && e.ctrlKey) {
		prompt('Has lanzado una aviso con el teclado')
	}
}
