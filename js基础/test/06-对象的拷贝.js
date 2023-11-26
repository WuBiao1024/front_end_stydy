//引用
/*const obj1 = {name: "WuBiao"}
const obj2 = obj1
obj1.name="Biao"
console.log(obj2);*/

let obj1 = {
    name:'obj1',
    a: '123',
    b: {
        name: 'Bob',
        age: 18,
        eat: function () {
            console.log('Bob eat!');
        },
        hobbies: ['看书','运动']
    }
}

// 浅拷贝
let obj2 = {...obj1}
let obj3 = {}
Object.assign(obj3,obj1)
//手写
function easyCloneObj(obj){
    //apply for a new obj
    let newObj={}

    let keys = Reflect.ownKeys(obj);
    keys.forEach(item=>{
        newObj[item] = obj[item];
    })
    return newObj;
}

let obj4 = easyCloneObj(obj1)
obj4.name = 'obj4'
obj1.b.name="Rock"
console.log(obj4);
console.log(obj1);


// 深拷贝


