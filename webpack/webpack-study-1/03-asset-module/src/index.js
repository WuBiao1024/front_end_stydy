import print1 from "./helloWord";
import imgSrc from "./assets/test.png"
import mySvg from './assets/Photos.svg'
import testText from './assets/test.txt'
import headerJpg from './assets/header.jpg'

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
block.style.cssText = "width:500px; height:300px; background:red"
document.body.appendChild(block);

const img3 = document.createElement("img");
img3.src = headerJpg
document.body.appendChild(img3);
