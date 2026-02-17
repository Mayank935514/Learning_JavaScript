/** this keyword 
 * Refers to the object that is executing the function.
*/

const obj = {
    name: "Mayank",
    displayMessage: function(){
        console.log("Hello " + this.name);  //Implicit Binding
    }
}
obj.displayMessage();


function calculateSum(){
    console.log(this); //if the function is not executing by the object then this keyword is refering to the global object called window.
}
calculateSum();