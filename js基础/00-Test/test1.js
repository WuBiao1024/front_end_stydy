/*
let arr = new Array(10).fill(1);

Array.prototype.myMap = function (callback) {
    //不是数组
    if (!Array.isArray(this)) return [];
    //不是函数
    if (Object.prototype.toString.call(callback) !== '[object Function]') return [];
    const resArr = [];
    this.forEach((item, index) => {
        let res = callback(item, index, this);
        resArr.push(res);
    })
    return resArr;
}

let arr1 =  arr.myMap(item => item + 1)
console.log(arr1);*/

function add (n){
    let val = 1;
    let arr = new Array(n).fill(1)
    let arr1 = arr.map((item)=>{
        let temp = val;
        val = val+2;
        return temp;
    })
    console.log(arr1);

    //去重
    let resArr = Array.from(new Set(arr1));
    return resArr.reduce((pre,cul)=>pre+cul,0)

}

console.log(add(5));