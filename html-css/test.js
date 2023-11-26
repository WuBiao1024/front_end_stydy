const rl = require("readline").createInterface({input: process.stdin});
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;


void async function () {
    // Write your code here
    line = await readline()
    let tokens = line.split(' ');
    let obj = JSON.parse(tokens[0]);
    let path = tokens[1] || '';
    let pathArr = path.split(".");
    // console.log(pathArr);
    // let test = obj[pathArr[0]][pathArr[1]][pathArr[2]]['0']['d2']
    // console.log(test);
    let result = obj;
    pathArr.forEach((item) => {
        if (item.startsWith("[")){
            item = item.substring(1, item.length - 1);
            result = result[item];
        }else if(result ){
            result = result[item];
        }''

    })
    if (result)
        console.log(result);
    else
        console.log("null")
}()
