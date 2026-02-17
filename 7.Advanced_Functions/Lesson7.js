/**
 * Argument Object in Non-arrow Function
 * ----argument object is an array like object present locally inside a function
 *     and it contains value of all the arguments passed to the function
 */
function calculateTotal(a,b){
    const arr1 = [...arguments];
    console.log(arr1);
    console.log(arguments);
   }
   
calculateTotal(3,4,5,6,7,8,9);


function hello(a = 10)
{
    console.log(a); 
    console.log(arguments); 
    arguments[0] = 9;   
    console.log(arguments);  
    console.log(a); 
}
hello(4);