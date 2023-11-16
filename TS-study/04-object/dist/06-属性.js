"use strict";
(function () {
    class person {
        get name() {
            return this._name;
        }
        get age() {
            return this._age;
        }
        constructor(name, age) {
            //默认是public
            this._name = "";
            this._age = 0;
            this._name = name;
            this._age = age;
        }
    }
    const person1 = new person("wubiao", 18);
    console.log(person1.age);
    class test {
        constructor(name) {
            this.name = name;
        }
    }
    const test1 = new test("test1");
    console.log(test1.name);
})();
