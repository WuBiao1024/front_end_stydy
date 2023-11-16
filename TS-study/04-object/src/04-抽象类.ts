(function () {
    abstract class animal{
        name:string = "";
        constructor(name:string) {
            this.name = name;
        }

        //只能定义在子类里面，并且子类必须对抽象方法进行重写
        abstract sayHello():void;
    }

    class Dog extends animal{
        sayHello(): void {
            console.log("汪汪汪");
        }

    }
})();