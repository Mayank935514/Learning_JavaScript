/**
 * async await --> Elegant way to writing a Promise 
 */

// Generally we write Promise like this 
let promise = new Promise((resolve) => resolve("done"));
promise.then((res) => console.log(res)).catch((err) => console.log(err));


async function showResponse() {   //async is a keyword which will make any function to become a promise
  try {
    let promise = new Promise((res, rej) => rej("promise rejected"));
    let result = await promise; // await --> function execution stops here until the promise is settled 
    console.log(result);
  } catch (err) {
    console.log("Error Occured::", err);
  }
}

showResponse();
