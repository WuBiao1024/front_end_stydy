const fs = require('fs')
const util = require("util");
const myReadfile = util.promisify(fs.readFile);

/*文件读取*/
//回调函数来实现
/*fs.readFile('./resource/1.html',(err, data1)=>{
    if(err) throw err
    fs.readFile('./resource/2.html',(err, data2)=>{
        if(err) throw err
        fs.readFile('./resource/3.html',(err, data3)=>{
            if(err) throw err
            console.log(data1+data2+data3)
        })
    })
})*/

//promise函数实现
async function main(){

    try {
        let data1 = await myReadfile('./resource/1.html');
        let data2 = await myReadfile('./resource/2.html');
        let data3 = await myReadfile('./resource/3.html');
        console.log(data1 + data2 + data3)
    } catch (e) {
        console.log(e);
    }
}

main();





