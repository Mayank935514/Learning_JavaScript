/** First Class Function
 * A programming is said to have First-class function if functions in that language are treated like other variables.
 * So the functions can be assigned to any other variable or passed as an argument or can be returned by another function
 */

// Example-1 //
const greetMessage = function(){
    console.log("Hello World!!");
}
greetMessage();

// Exapmle-2 //
function wrapper()
{
    return "Hello World";
}
function Message(inner, name){
    let message = inner();
    console.log(name, message);
}
Message(wrapper, "Mayank");

// Eample-3 //
function displayMessage(){
    function wrap(){
        let name = "Honey";
        console.log(name, "Welcome!");
    }
    return wrap
}
const output = displayMessage();
output();