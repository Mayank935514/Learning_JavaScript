/**
 * Map - Filter
 * They are High order function.
 */

// Map --> It iterates over each element of an array and applies a provided function to each element, 
//         creating a new array with the results.
const arr = [1, 2, 3, 4, 5];
function getSquares(number){
    return number ** 2;
}
const output = arr.map(getSquares);
console.log(output);


// function squareOfNumbers(arr){
//     const tempArr = [];
//     for(let number of arr){
//         tempArr.push(number ** 2);
//     }
//     return tempArr;
// }
// const result = squareOfNumbers(arr);
// console.log(result);