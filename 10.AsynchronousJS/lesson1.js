/**
 * Asynchronous---> Asynchronous means something will happen later on then i basically will call the function.
 * Callback function---> when we pass the function in another function as an argument that function is called callback function.
 *                       OR we can say A function that is executed Asynchronously.
 */

console.log("Hello");
setTimeout(function callback(){        //Async Operation
    console.log("Executed After a Delay");
},4000);     // After the timer has expired then I am calling the function back.
console.log("Hii");
