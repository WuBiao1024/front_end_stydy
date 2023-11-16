"use strict";
(function () {
    const obj = {
        name: "sss",
        age: 10
    };
    class person {
        constructor(age, gender, name) {
            this.age = age;
            this.gender = gender;
            this.name = name;
        }
        sayHello() {
            console.log("hello");
        }
    }
    const obj1 = new person(10, "nan", "weubiao");
    obj1.sayHello();
})();
