/**
 * Reduce -- It takes two parameter one is callback function and another one is initial value.
 *           It returns a single value.
 */
const arr = [1, 2, 3, 4, 5];
const reduceFun = (acc, cur) => acc + cur;       // acc is accumulator and cur is current
const output = arr.reduce(reduceFun, 0);       // here acc value is 0 and cur value is the first value of the array.  
console.log(output);