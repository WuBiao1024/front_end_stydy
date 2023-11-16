const  promise = new Promise((resolve, reject)=>{//promise pending
    console.log(1);
    resolve();
    //接着执行
    console.log(2);
})


//output 1  promise(fulfilled) output 2
let promise2 = promise.then(()=>{
    console.log(3);
})
//then 的回调进入微队列
//微队列 fn3

console.log(promise2); //pending
console.log(promise); //fulfilled

console.log(4);

//output 4
//output 3

//结果 1243
