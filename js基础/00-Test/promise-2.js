const promise = new Promise((resolve,reject)=>{
    console.log(1);
    setTimeout(()=>{
        console.log(2);
        resolve(3);
        console.log(4);
    },0);
});

promise.then(res=>{
    console.log(res);
})
console.log(5)

//微队列
/*
res=>{
    console.log(res);
}
*/

//宏队列
/*fn console.log(2);
resolve(3);
console.log(4);*/


//输出
// 1 5 2 4 3

