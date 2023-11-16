//解决作用域问题
//gulp和grunt解决作用域问题 问题：修改其中一行，全部重新编译。
(function(){
    let myName = "WuBiao"
})()

// console.log(myName);//报错

let result  = (function (a,b){
    let myName = "WuBiao";
    return {
        myName,
        a,
        b
    };
})(123,456)

console.log(result);//WuBiao
