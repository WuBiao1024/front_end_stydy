import './style/style.css'
import './helloWord.js'
import helloWord from './helloWord.js'
import _ from 'lodash'

const div = document.createElement('div')
div.classList.add('icon')
div.innerHTML = "&#xe605;"
document.body.appendChild(div)

helloWord();

console.log(_.join(['lodash','hello','wubiao'],"-"))
