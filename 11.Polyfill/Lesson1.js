/**
 * Polyfill --> a polyfill is a piece of javascript code used to provide modern functionality on older browsers that do not support it.
 */

// Polyfill for Map

// const arr = [1, 2, 3, 4, 5];
// const squaredArray = arr.mapap(num => num ** 2);
// console.log(squaredArray);

const arr = [1, 2, 3, 4, 5];

function getSquareOfNum(number) {
  return number ** 2;
}

Array.prototype.myMap = function (callback) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    tempArr.push(callback(this[i], i, this));
  }
  return tempArr;
};

const squaredArr1 = arr.myMap(getSquareOfNum);
console.log(squaredArr1);