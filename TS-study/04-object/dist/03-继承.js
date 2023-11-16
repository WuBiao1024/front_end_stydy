"use strict";
(function () {
    class animal {
        constructor(name, age) {
            this.name = "";
            this.age = 0;
            this.age = age;
            this.name = name;
        }
        sayHello() {
            console.log("动物在叫!");
        }
    }
    class Dog extends animal {
        constructor(name, age, tag) {
            super(name, age);
            this.tag = "汪汪汪";
            this.tag = tag;
        }
        sayHello() {
            console.log(this.tag);
        }
    }
    class Cat extends animal {
        constructor(name, age, tag) {
            super(name, age);
            this.tag = "喵喵喵";
            this.tag = tag;
        }
        sayHello() {
            console.log(this.tag);
        }
    }
    const dog = new Dog("dog1", 1, "汪");
    const cat = new Cat("cat1", 2, "喵");
    cat.sayHello();
    dog.sayHello();
    const animal1 = new animal('动物', 1);
    animal1.sayHello();
    const animal2 = new Dog("dog", 1, "wang");
    animal2.sayHello();
})();
