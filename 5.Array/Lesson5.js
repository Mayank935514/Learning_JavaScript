/** Array sort */

const fruits = ["Apple", "Banana", " Orange", "Ball"];
fruits.sort();
console.log(fruits);


const numbers = [1,4,2,6,7,3,8,5,61,31,51,11];
function sortAscendingOrder(a,b)
{
    return a-b;
}
function sortDescendingOrder(a,b)
{
    return a-b;
}
numbers.sort(sortAscendingOrder);
//numbers.sort(sortDescendingOrder);
console.log(numbers);