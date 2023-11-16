function isEqualObj(obj1, obj2) {

    function isObj(obj) {
        return Object.prototype.toString.call(obj) === "[object Object]"
    }

    if (obj1 === obj2) return true
    if (obj1 === null || obj2 === null) return false
    if (!isObj(obj1) || !isObj(obj2)) return false
    let keys1 = Reflect.ownKeys(obj1)
    let keys2 = Reflect.ownKeys(obj2)
    if (keys1.length !== keys2.length) return false

    let ret1 = keys1.every(key => {
        if (isObj(obj1[key])) {
            return isEqualObj(obj1[key], obj2[key])
        } else {
            return obj1[key] === obj2[key]
        }
    })

    let ret2 = keys2.every(key => {
        if (isObj(obj2[key])) {
            return isEqualObj(obj1[key], obj2[key])
        } else {
            return obj1[key] === obj2[key]
        }
    })


    return ret1 && ret2;
}

//测试
let obj1 = {
    a: 1,
    b: 1,
    c: {
        d: 1,
    },
    [Symbol.for('foo')]: 'foo'

}

let obj2 = {
    a: 1,
    b: 1,
    c: {
        d: 1,
    },
    [Symbol.for('foo')]: 'foo'

}

console.log(isEqualObj(obj1, obj2));