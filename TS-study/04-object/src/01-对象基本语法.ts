//类的定义
class person{
    static readonly SEX:object ={
        male: 1,
        femaile:0
    }

    name:string = "wubiao"
    age:number=13

    static count:number = 0
    constructor(name?:string,age?:number) {

        person.count++;
    }
    //方法
    sayHello(){
        return "大家好"
    }
}
console.log(person.count);
const person1 = new person();
console.log(person1);
console.log(person1.age);
console.log(person1.name);
console.log(person.count);
// @ts-ignore
console.log(person.SEX.male);

console.log(person1.sayHello());




