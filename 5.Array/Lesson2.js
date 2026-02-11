/** Array methods -- Push and Concat */
/** Object can be Mutable and Immutable
 * Mutable means that can be change
 * Immutable means that can not be changed
 */

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);
//push//
fruits.push("Orange");
console.log(fruits);

// Concat //
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let arr4 = arr1.concat(arr2);
let arr5 = arr1.concat(arr2,arr3,arr4);
console.log(arr4);
console.log(arr5);