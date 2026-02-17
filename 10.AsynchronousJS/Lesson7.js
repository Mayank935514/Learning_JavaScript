/**
 * Promise.race()
 */

let promise1 = new Promise((resolve)=>setTimeout(()=>resolve("Promise1 resolves"),3000));
let promise2 = new Promise((resolve,reject)=> 
    setTimeout(()=>reject("Promise2 rejected"),2000));
let promise3 = new Promise((resolve)=>setTimeout(()=>resolve("Promise3 resolves"),1000));


let arrayOfPromises = [promise1, promise2, promise3];
let promise = Promise.race(arrayOfPromises);
promise.then((res)=>console.log(res));

//Promise.any()
let promiseAny = Promise.any(arrayOfPromises);
promiseAny.then((res)=>console.log(res));