/**Copy By Reference */

const arr1 = [1,2,3];
const arr2 = arr1;
 //Shallow Copy
console.log(arr1);
console.log(arr2);
arr2.push(4);
console.log("Update ARR1: " + arr1);
console.log("Update ARR2: " + arr2);

