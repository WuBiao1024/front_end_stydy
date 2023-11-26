function once(fn) {
    let ret;
    let isFirst = true;
    return function (...args) {
        if (!isFirst)
            return ret;
        ret = fn(...args)
        isFirst = false;
        return ret;
    }
}



let add = once(function (...args) {
    if (args?.length !== 0)
        return args.reduce((pre, now) => pre + now)
    return NaN;
}, 0);

console.log(add(1, 2, 3, 5));
console.log(add(1, 4));
console.log(add(3, 4));
console.log(add());
