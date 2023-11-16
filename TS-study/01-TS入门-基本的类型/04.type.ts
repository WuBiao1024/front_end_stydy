//object 是js的一个对象
/**/let a:object;
a = {name:'wubiao'};
a = function (){

};

//{}可以指定对象可以包含的属性,?代表属性可选
let b: {
    name:string
    sex:string
    age?:number
}

//报错
// b = {}
b = {
    name:'wubiao',
    sex:"male",
}

//[propName: string]:any 任意数量，任意类型
let c:{
    name:string,
    [propName: string]:any
}
c={
    name:"wubiao",
    sex:"female",
    age:10,
}

//希望d是一个函数，并且有两参数，返回值是number
let d:(a:number,b:number)=>number;

d = function (n1:number,n2:number){
    return n1 + n2;
}
//string[] 字符串数组
let e :string[];
e = ['123','hello','word']

let f :number[];
f=[1,2,3]

let g:Array<number>
g = [1,2,3];

let h: Array<string>;
h=["11","22"]


let j:[string,string]
j=['hello','word']

//出错
//j=['hello',123]


let i:{
    name: string, gender:number
}
i={
    name:"wubiao",
    gender:0,//male
}
//把所有的可能都枚举出来
enum gender{
    male,
    female,
}

 console.log(i.gender===gender.male)

//&同时
let m :{name:string} & {age:number}

m = {
    name:'wubiao',
    age:18
}

//类型的别名
type myType = 1 | 2 | 3 |4 | 5;
let k: myType
let l: myType
let o: myType
k =1;
l=2;
//o=10

console.log(typeof (l));
console.log(k);







