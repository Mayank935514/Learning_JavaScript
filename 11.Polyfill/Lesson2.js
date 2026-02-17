/**
 * Polyfill for filter
 */

const arr = [1, 2, 3, 4, 5, 6];

function getFilteredArr(number) {
  return number > 3; 
}

Array.prototype.myFilter = function (callback) {
  let tempArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(this, this[i], i, this)) {
      // getFilteredArr(5)
      tempArr.push(this[i]);
    }
  }
  return tempArr;
};

const result = arr.myFilter(getFilteredArr);
console.log(result);