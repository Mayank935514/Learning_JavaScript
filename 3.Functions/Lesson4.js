/** Arrow Function */

const calculateSum = function(x,y)
{
    return x+y;
}
console.log(calculateSum(2,3));

// Convert the above regular function into Arrow Function
const calculateAddition = (x,y) =>{
    return x + y;
}
console.log(calculateAddition(12,18));

// Federal Function //
const calculateAdd = (x,y) => x+y;
console.log(calculateAdd(5,6));

const Sum = (x,y) => x > y ? x + y : x - y;
console.log(Sum(8,9));