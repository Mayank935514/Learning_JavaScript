/** arr.includes() 
 * It gives boolean value
*/

const availablesize = ['s','M','XL','L','XXL'];
const readlineSync = require("readline-sync");
const userSize = readlineSync.question("Which size you want?");
const isAvailable = availablesize.includes(userSize);
console.log(isAvailable);