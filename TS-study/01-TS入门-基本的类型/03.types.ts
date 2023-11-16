let a: 10;
a = 10;

let b: "male" | "femal";
b = "male";
// b = "hello";//会出错，可以一直多或几次

let un: any;
//let u; //不指定的时候默认就是any
un = 10;
un = "hello";

//unknow
let u: unknown;
u = 14;
u = "string";

let s: string;
s = "hello";
s = un;
//unknow类型的值不能赋值给其它类型
//实际是一个类型安全的概念
if (typeof u === "string") {
    s = u;
}

//断言，类型转换
s = u as string;
s = <string>u;

function fn(num) {
    return num > 0 ? false : true;
    //return ++num;
}

function fn1(): never {
    throw new Error("报错信息");
}

//返回值是undefinded
function fn2(): void {
    return undefined;
}


