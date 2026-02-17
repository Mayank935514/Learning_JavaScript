/** 
 * Filter
 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8 , 9];
const output =arr.filter(number => number > 5);
console.log(output)
// function filterNumbers(arr){
//     const tempArr = [];
//     for(let number of arr){
//         if(number > 5){
//             tempArr.push(number);
//         }
//     }
//     return tempArr;
// }
// const output = filterNumbers(arr);
// console.log(output);