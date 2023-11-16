//创建对象的三种方法
//1. 字面量
let person = {
    name:"WuBiao",
    job:"font-end engineer"
}

//工场模式
let CreatePerson = function (name,job){
    // let p = new Object();
    let p = {};
    p.name = name;
    p.job=job;
    return p;
}

//构造函数
let Person = function (name,age){
    this.name = name;
    this.job = job;
}
