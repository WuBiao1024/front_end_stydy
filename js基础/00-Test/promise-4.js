const myPromise = Promise.resolve(Promise.resolve('A'));

function oneFunc (){
    myPromise.then(res=>res).then(res=>console.log(res))
    setTimeout(()=>{
        console.log('B');
    },0)
    console.log('C');
}
async function twoFunc(){
    const res = await myPromise
    console.log(await res);
    setTimeout(()=>{
        console.log('D');
    },0)
    console.log('E');
}

oneFunc();
twoFunc();