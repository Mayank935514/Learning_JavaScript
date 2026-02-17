/**
 * A closure is a combination of a function bundled together with refernces to its lexical environment.
 * In other words, A closure is a function that remembers its outer variables and can access them. 
 */
function outerFunction() {
    let outerVariable = 10;

    function innerFunction() {
        console.log(outerVariable); // Accesses outerVariable
    }

    return innerFunction;
}

const myClosure = outerFunction(); // Returns the innerFunction
myClosure(); // Executes innerFunction, logs 10