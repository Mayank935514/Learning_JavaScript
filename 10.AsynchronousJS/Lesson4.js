/** Creating a Promise */

const isRequestSuccessful = true;
 let promise = new Promise((resolve,reject)=>{        //Making a new promise using Promise Constructor
    if(isRequestSuccessful){
        //resolve("Promise resolved")
        setTimeout(()=>resolve("Promise resolved"),4000);
    }
    else{
        const error = new Error("Something went wrong");
        reject(error.message)
    }
 })  

 console.log(promise);