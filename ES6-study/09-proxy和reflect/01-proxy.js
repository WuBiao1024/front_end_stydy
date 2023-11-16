/*let obj = {
    key1:'value1',
    key2:'value2',
    deepObj:{
        a:{
            b:'deepvalue'
        }
    }
}

let proxy = new Proxy(obj,{})

console.log(proxy.key1);
proxy.key2 = '666';
console.log('obj.key2===>'+obj.key2);
console.log('proxy.key2===>'+proxy.key2);

proxy.deepObj.a.b='updateVale'
console.log(obj.deepObj.a.b);

let obj2 = {
    key1:'value1',
    key2:'value2',
}

console.log("===========");
console.log("===========");


let proxy2 = new Proxy(obj2,{
    get(target, p, receiver) {
        console.log(receiver===proxy2);
        return Reflect.get(target,p);
        // return target[p]
    },

})

console.log(proxy2.key2);

console.log(proxy2.ownKeys());*/

//快速排序算法
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}
let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(quickSort(arr));

function cloneDeep(obj){
    let objClone = Array.isArray(obj) ?[]:{};
    if(typeof obj !== 'object'){
        return obj;
    }else if(obj instanceof RegExp){
        return new RegExp(obj);
    }else{
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                if(typeof obj[key] === 'object' && obj[key] !== null){
                    objClone[key] = cloneDeep(obj[key]);
                }else{
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}

let obj = {
    name: 'why',
    age: 18,
    friends: [
        {
            name: 'kobe',
            age: 40,
        }
    ],
    isStudent: true,
    isWorker: false,
    isMarried: false,
    isHandsome: true,
    isBeauty: false,
}

let cloneObj = cloneDeep(obj);

cloneObj.friends[0].name = 'james';

console.log(obj);
console.log(cloneObj);
