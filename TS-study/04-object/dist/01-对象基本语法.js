"use strict";
//类的定义
class person {
    constructor(name, age) {
        this.name = "wubiao";
        this.age = 13;
        person.count++;
    }
    //方法
    sayHello() {
        return "大家好";
    }
}
person.SEX = {
    male: 1,
    femaile: 0
};
person.count = 0;
console.log(person.count);
const person1 = new person();
console.log(person1);
console.log(person1.age);
console.log(person1.name);
console.log(person.count);
// @ts-ignore
console.log(person.SEX.male);
console.log(person1.sayHello());
