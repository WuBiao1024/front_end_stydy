(function () {
    class person{
        //默认是public
        private _name:string = ""
        private _age:number=0


        get name(): string {
            return this._name;
        }

        get age(): number {
            return this._age;
        }

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }
    }

    const person1 = new person("wubiao",18);
    console.log(person1.age);


    class test{
        constructor(public name:string) {
        }
    }

    const test1 = new test("test1");
    console.log(test1.name);

})();