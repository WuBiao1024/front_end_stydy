"use strict";
class Dog {
    constructor(name, age) {
        this.name = "hello";
        this.age = 0;
        this.age = age;
        this.name = name;
    }
    bark() {
        console.log(this);
    }
}
const dog = new Dog("dog1", 1);
const dog1 = new Dog("dog2", 2);
dog1.bark();
dog.bark();
