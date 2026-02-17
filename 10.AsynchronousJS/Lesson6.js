/** 
 * Promise.allSettled(arrayOfPromises) --> It can be used to check whether a Promise is settled (either resolved or rejected).
 */

let promise1 = new Promise((resolve)=>setTimeout(()=>resolve("Promise1 resolves"),1000));
let promise2 = new Promise((resolve,reject)=> 
    setTimeout(()=>reject("Promise2 rejected"),2000));
let promise3 = new Promise((resolve)=>setTimeout(()=>resolve("Promise3 resolves"),3000));


let arrayOfPromises = [promise1, promise2, promise3];
let promise = Promise.allSettled(arrayOfPromises);
promise.then((response)=>response.forEach((data)=>console.log(data)));