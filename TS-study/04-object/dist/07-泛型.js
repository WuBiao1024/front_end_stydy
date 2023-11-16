"use strict";
//类型确定
function fn(num) {
    return num;
}
//类型不确定
//用法1，不推荐
function fn1(num) {
    return num;
}
//泛型
function f2(a) {
    return a;
}
//ts自动进行类型推断
let result = f2(10);
let result2 = f2("hello");
function f3(a, b) {
    console.log(b);
    return a.length;
}
f3({ name: "hello", length: 10 }, 456);
class testClass {
    constructor(name) {
        this.name = name;
    }
}
const testClass1 = new testClass("name");
console.log(testClass1.name);
