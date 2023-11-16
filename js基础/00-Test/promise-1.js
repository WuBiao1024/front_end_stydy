let promise1 = new Promise((resolve, reject) => {
    console.log("promise1");
    //promise1 pending ""
    resolve('resolve1');
    //promise1 fulfilled "resolve1"
})


let promise2 = promise1.then(res => {

    console.log(res);
    // return 1
    // promise2 pending undefined
})

// promise2 fulfilled undefined
console.log("1", promise1);
console.log("2", promise2);


//微队列
console.log(res);
//宏队列


//输出
//promise1
//1  promise1 fulfilled "resolve1"
//2  promise2 pending ""
//resolve1
