/** Conditional statements */

const readlineSync = require("readline-sync");
const userage = readlineSync.question("May i know your age ? ");
if(userage >16)
{
    console.log("You are an adult");
}
else{
    console.log("You are not an adult");
}