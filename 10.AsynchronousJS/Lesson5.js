/** 
 * Promise.all([arrayOfPromise])
 */

// Here, is a one problem i.e. if one promise is rejected then the entire promises are rejected as a whole.
let promise1 = new Promise((resolve)=>setTimeout(()=>resolve("Promise1 resolves"),1000));
let promise2 = new Promise((resolve,reject)=> 
    setTimeout(()=>reject("Promise2 rejected"),2000));
let promise3 = new Promise((resolve)=>setTimeout(()=>resolve("Promise3 resolves"),3000));

// promise1.then((res)=>console.log(res));
// promise2.then((res)=>console.log(res));
// promise3.then((res)=>console.log(res));

let arrayOfPromises = [promise1, promise2, promise3];
let promise = Promise.all(arrayOfPromises);
console.log(promise);
promise.then((res)=>console.log(res)).catch((err)=>console.log(err));