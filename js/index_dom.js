import scrollTopButton from './dom/boton_scroll.js'
import countdown from './dom/cuenta_regresiva.js'
import hamburgerMenu from './dom/menu_hamburguesa.js'
import { digitalClock, alarm } from './dom/reloj.js'
import { moveBall, shortcuts } from './dom/teclado.js'
import darkTheme from './dom/tema_oscuro.js'

const d = document

d.addEventListener('DOMContentLoaded', e => {
	hamburgerMenu('.panel-btn', '.panel', '.menu a')
	digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj')
	alarm('assets/alarma.mp3', '#activar-alarma', '#desactivar-alarma')
	countdown(
		'countdown',
		'Mar 02, 2021 09:52:00',
		'Feliz Cumpleaños amigo y docente digital'
	)
	scrollTopButton('.scroll-top-btn')
	darkTheme('.dark-theme-btn', 'dark-mode')
})

d.addEventListener('keydown', e => {
	shortcuts(e)
	moveBall(e, '.ball', '.stage')
})
