/** High Order Functions
 * A function that accepts another function as an argument or returns a function or does both.
 */

//Example-1//
function wrapper(){
    return "Hello";
}
function greetMessage(wrapper){
    console.log("Mayank", wrapper());
}
greetMessage(wrapper);

//Example-2//
function displayMessage(){
    return function(){
        console.log("Hello Ravi");
    }
}
const output = displayMessage();
output();

//Exampl-3//
const arr = [1,2,3,4,5];
function squareOfNumbers(arr){
    let squaredNumber = [];
    for(let number of arr){
        squaredNumber.push(number ** 2);
    }
    return squaredNumber;
}
const result = squareOfNumbers(arr);
console.log(result);


// Example-4 //
const arr1 = [1,2,3,5,6];
function square(number){
    return number ** 2;
}
function cube(number)
{
    return number ** 3;
}
function calculatePower(wrapper, arr1){
    let tempArr = [];
    for(let number of arr1){
        tempArr.push(wrapper(number));
    }
    return tempArr;
}
const squared = calculatePower(square, arr1);
console.log(squared);

const cubed = calculatePower(cube, arr1);
console.log(cubed);