/** Anonymous Function and Function Expression 
 * Assigning function to a variable without function name 
 * or we can say any function which have not its identity is called Anonymous function. 
*/

//anonymousFunction();     //Before initialisation we can't acces Anonymous function

let anonymousFunction = function()   
{
    console.log("Hello World!");
}
console.log(typeof anonymousFunction);
anonymousFunction();