let a = [1,2,3]

//数组的valveOf函数返回数组本身
console.log(Object.prototype.toString.call(a.valueOf()) );
//返回数组的
console.log(typeof a.toString());

//两者都行
a.valueOf = a.shift;
// a.toString = a.shift();

let b = {
    num:1,
    toString(){
        return this.num++
    }
}

/*if (a == '1' && a == '2' && a == '3') {
    console.log("hello");
}*/

if (b == '1' && b == '2' && b == '3') {
    console.log("hello");
}
