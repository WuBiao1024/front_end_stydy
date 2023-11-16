import print1 from "./helloWord";
import imgSrc from "./assets/test.png"
import mySvg from './assets/Photos.svg'
import testText from './assets/test.txt'
import headerJpg from './assets/header.jpg'
import './style.css'
import  './style.less'
import csvAsset from './assets/data.csv'
import xmlAsset from './assets/data.xml'
import toml from './assets/data.yaml'
import yaml from './assets/data.toml'
import json5 from './assets/data.json5'

print1();

const img = document.createElement('img')
img.src = imgSrc
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.src = mySvg;
img2.style.cssText = 'width:600px; height:200px';
document.body.appendChild(img2)

const block = document.createElement("div")
block.textContent = testText;
block.style.cssText = "width:500px; height:300px; background:green"
block.classList.add('block-bg')
document.body.appendChild(block);

const img3 = document.createElement("img");
img3.src = headerJpg
document.body.appendChild(img3);

document.body.classList.add('redColor')/**/


const div = document.createElement('div')
div.innerHTML = '&#xe607;'
div.classList.add('icon1')
document.body.appendChild(div)

console.log(csvAsset); //数组
console.log(xmlAsset); //对象

console.log(toml); 
console.log(yaml); 
console.log(json5); 
