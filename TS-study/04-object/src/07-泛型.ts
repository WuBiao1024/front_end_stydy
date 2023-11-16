//类型确定
function fn(num:number):number {
    return num;
}

//类型不确定
//用法1，不推荐
function fn1(num:any):any {
    return num;
}

//泛型
function f2<T>(a:T):T {//T表示任意类型
    return a;
}

//ts自动进行类型推断
let result = f2(10);
let result2 = f2<string>("hello");


interface Inter{
    length:number;
}
function f3<T extends Inter,K>(a:T,b:K):number{
    console.log(b);
    return a.length;
}

f3({name:"hello",length:10},456);



class testClass<T>{
    name: T | undefined;

    constructor(name: T | undefined) {
        this.name = name;
    }
}

const testClass1 = new testClass<string>("name");
console.log(testClass1.name);







