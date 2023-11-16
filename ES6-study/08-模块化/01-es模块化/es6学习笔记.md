# ES6 学习笔记

## 一、新增的let和const命令
1. ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效，并且不存在变量提升。在同一作用域也不能重复申明，同时也不暴露在windows对象里面。
```js
{
    let a = 10;
    var b = 1;
}
a //a is not defined
b //1
```

for循环的计数器，就很合适使用let命令。**需要注意的是**，for语句的括号和代码块是不同的作用域，可以重复使用Let和const定义变量,并且()作用域是{}作用域的父作用域


```js
for (let i = 0; i < 10; i++) {
// ...
}

console.log(i);// ReferenceError: i is not defined
```
2. const 申明的变量和let一样，但是，其值申明以后就不能再改变了。
```js
const NAME = "WuBiao"
NAME = "WuBiao2号"//不生效
```

3. 暂时性变量死区
由于let和const声明的变量不存在变量提升，因此，一个作用域中，当一个被let和const申明的变量在申明以前是不能使用的，在这些不能使用的区域就见做暂时性死区。
```js
let a = 666
if(true){
    console.log(a);//暂时性死区不能使用a
    let a=333
    
}
```

4. 如果使用const申明的变量的注意点
如果是基本数据可以确保数据不会变动，但是如果是对象，只能保证对象本身的在内存中的地址不会变动，但是对象中的属性是可以变动的。
可以使用Object.freeze冻结对象的属性，但是只能冻结一层。



