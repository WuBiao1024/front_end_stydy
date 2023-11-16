class Dog{
    name:string = "hello";
    age:number = 0;
    constructor(name:string,age:number) {
        this.age = age;
        this.name = name;
    }

    bark(){
        console.log(this)
    }
}

const dog = new Dog("dog1",1);
const dog1 = new Dog("dog2",2);

dog1.bark()
dog.bark()



