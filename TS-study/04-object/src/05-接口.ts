(function () {
    //描述一个对象的类型
    type myType={
      name:string,
      age:number,
    //  [propNmae:string]:any
    };

    const obj:myType={
        name:"sss",
        age:10
    }

//     使用接口限制类的结构
    interface myInterface {
        name:string;
        age:number;
    }
    //接口里面添加属性
    interface myInterface{
        gender:string;
        sayHello():void;
    }

    class person implements myInterface{
        age: number;
        gender: string;
        name: string;


        constructor(age: number, gender: string, name: string) {
            this.age = age;
            this.gender = gender;
            this.name = name;
        }

        sayHello(): void {
            console.log("hello");
        }

    }

    const obj1 = new person(10,"nan","weubiao")
    obj1.sayHello()





})();