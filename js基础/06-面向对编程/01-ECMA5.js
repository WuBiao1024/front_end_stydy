//es6 以前的继承
/*let Shape= function (x,y) {
    this.x= x;
    this.y= y;
}

Shape.prototype.moved = function (x,y){
    this.x +=x;
    this.y +=y;
}

let Rectangle = function (){}
Rectangle.prototype = new Shape(1,2);
Rectangle.prototype.constructor = Rectangle;
let rectangle = new Rectangle();
console.log(rectangle);
// rectangle.moved(100,2)
console.log(rectangle instanceof Shape);*/

//多继承
let Super1 = function () {
    this.name1 = "super1"
}

let Super2 = function () {
    this.name2 = "super2"
}

//盗用构造函数,实现多继承
let Son1 = function (){
    Super1.call(this);
    Super2.call(this);
    this.name = 'Son'
}

let son = new Son1();
console.log(son);

//原型链的多继承

let Son2 = function (){}

Son2.prototype = new Super1();
Son2.prototype.constructor = Son2;//改变原型要记得同时改变构造函数的指向
Object.assign(Son2.prototype,new Super2());

let son2  = new Son2();
console.log(son2 instanceof Super1);//true
console.log(son2 instanceof Super2);//false


