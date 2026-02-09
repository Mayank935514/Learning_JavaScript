/** Logical Operator with truthy and falsy values */

const firstName = "";
const nickName = "Anna";

console.log(firstName || nickName);
console.log(Boolean(""));   //Boolean of an empty string gives false value
                            //Boolean of 0,null,undefined also gives false value
console.log(Boolean(" "));  //Boolean of an empty string with space gives true value

const First = null;
const Second = undefined;
const username = First || Second || null;
console.log(`Name - ${username}`);  // it will give last falsy value because all values are false