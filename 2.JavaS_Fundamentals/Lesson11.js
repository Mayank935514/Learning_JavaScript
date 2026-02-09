/** Error Handling - try and catch and finally block */

const userName = "May";
try{
    someFunction();
    console.log("hey there");
}catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}finally{
    console.log("finaaly executed");
}
console.log(userName);