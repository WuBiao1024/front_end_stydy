/*
function fun2() {
    console.log("aaaa");
}

var aaa = (function (x) {
    return Math.pow(x, 2)
}(20))

console.log(aaa);

f = function func(i) {
    if (i <= 1) return 1;
    return func(i - 1) * i
}*/

/*new.target  和 this instanceOf func 判断 调用的时候的使用的什么方式*/

function TestFunc(a){
    //法1：一定要加括号
   /* if (!(this instanceof TestFunc))
        return new TestFunc(a);*/
    //法2：
    if(!new.target)
        return new TestFunc(a);
    this.a = 1;
}

console.log(new TestFunc(1));
console.log( TestFunc(1));
