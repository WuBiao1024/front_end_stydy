require(['./requirejs/add.IIFE','./requirejs/sub.IIFE'],function (add,sub){
    console.log(add(1, 2));
    console.log(sub(10, 5));
})