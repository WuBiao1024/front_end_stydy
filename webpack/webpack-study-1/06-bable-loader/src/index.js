import './style/style.css'
import './helloWord.js'
import helloWord from './helloWord.js'

const div = document.createElement('div')
div.classList.add('icon')
div.innerHTML = "&#xe605;"
document.body.appendChild(div)

helloWord();
