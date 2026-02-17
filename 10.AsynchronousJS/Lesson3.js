/**
 * Promise --> Promise is an object that has the status of an async operation, and its corresponding value.
 *             Promise is used to solve the problem of callback hell.
 *             Three stages of Promises are pending, fulfilled, and rejected.
 * Method Chaining --> It is a technique used to chain multiple methods together in a single statement.
 */

let promise1 = fetch('https://randombig.cat/roar.json');
promise1.then(function(response){
  return response.json();
}).then(function(data){
 console.log({data})
}).catch(function(error){
 console.log("Some Error in fetching response")
});