//object 是js的一个对象
/**/ var a;
a = { name: 'wubiao' };
a = function () {
};
//{}可以指定对象可以包含的属性,?代表属性可选
var b;
//报错
// b = {}
b = {
    name: 'wubiao',
    sex: "male",
};
//[propName: string]:any 任意数量，任意类型
var c;
c = {
    name: "wubiao",
    sex: "female",
    age: 10,
};
//希望d是一个函数，并且有两参数，返回值是number
var d;
d = function (n1, n2) {
    return n1 + n2;
};
//string[] 字符串数组
var e;
e = ['123', 'hello', 'word'];
var f;
f = [1, 2, 3];
var g;
g = [1, 2, 3];
var h;
h = ["11", "22"];
var j;
j = ['hello', 'word'];
//出错
//j=['hello',123]
var i;
i = {
    name: "wubiao",
    gender: 0, //male
};
//把所有的可能都枚举出来
var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
console.log(i.gender === gender.male);
//&同时
var m;
m = {
    name: 'wubiao',
    age: 18
};
var k;
var l;
var o;
k = 1;
l = 2;
//o=10
console.log(typeof (l));
console.log(k);
