/** 
 * Polyfill for Bind
 */

const obj = {
  name: "Mayank",
  city: "Mumbai",
};

function displayUserInfo(state) {
  console.log(`Hi I am ${this.name} form ${this.city}, ${state}`);
}

Function.prototype.myBind = function (context, ...args) {
  context.wrapperFunc = this;
  return function (...rest) {
    context.wrapperFunc(...args, ...rest);
    delete context.wrapperFunc;
  };
};

const bindFunc = displayUserInfo.myBind(obj, "Maharashtra");
bindFunc();