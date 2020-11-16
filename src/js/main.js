import './piano.js'
import './quiz.js'
import './validation.js'

const nav = document.querySelector('.navMain')
const canHazBurger = document.querySelector('.canHazBurger')

canHazBurger.addEventListener('click', e => {
  nav.classList.toggle('hidden')
})

console.log('\x1b[1m\x1b[36m Starting WDS projects! \x1b[0m')
