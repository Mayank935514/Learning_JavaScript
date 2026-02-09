/** Concatenation */
// This is old tradional method to concatenate strings in a single line.
let userName = "Mayank";
let age = 21;

let message = "My name is " + userName + " and i am " + age + " years old."
console.log(message);

/** Template Literal/Strings */
//This is new method
let text = `My name is ${userName} and I am ${age} years old.`
console.log(text);