/**
 * Polyfill for Call & Apply
 */

const obj = {
  name: "Mayank",
  city: "mumbai",
};

function displayUserInfo(state) {
  console.log(`Hi I am ${this.name} from ${this.city}, ${state}`);
}

Function.prototype.myCall = function (context, ...args) {
  context.showMessage = this;
  context.showMessage(...args);
  delete context.showMessage;
};

Function.prototype.myApply = function (context, args) {
  context.showMessage = this;
  context.showMessage(...args);
  delete context.showMessage;
};

//displayUserInfo.myCall(obj, "maharashtra");
displayUserInfo.myApply(obj, ["maharashtra"]);