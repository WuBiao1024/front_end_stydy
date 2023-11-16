import './style/style.css'
import './helloWord.js'
import helloWord from './helloWord.js'
import _ from 'lodash'
import './async-module.js'

const div = document.createElement('div')
div.classList.add('icon')
div.innerHTML = "&#xe605;"
document.body.appendChild(div)

helloWord();

console.log(_.join(['lodash','hello','wubiao'],"-"))

const button = document.createElement('button');
button.textContent = '+++';
button.addEventListener('click',()=>{
    //webpackPrefetch:当网页都加载完毕网页空闲的时候再去加载打包好的math.bundle.js 预加载
    //webpackPreload: 当用户第一次点击的时候加载
    import(/*webpackChunkName:'math',webpackPreload:true*/'./math.js').then(({add})=>{
        console.log(add(1,3));
    })
})
document.body.appendChild(button);

