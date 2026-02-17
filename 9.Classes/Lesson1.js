/** Prototype
 * Every object inside the javascript having hidden property called prototype.
 * Every object has a single prototype.
 */
const loggedInStatus={
    isLoggedIn: true,
};
const admin={
    isAdmin: true,
    __proto__: loggedInStatus,
};
const user={
    name: "mayan",
    age: 22,
    __proto__: admin,   //accessing the prototype or creating the prototype for the user
};
console.log(user);
console.log(user.isLoggedIn);
//console.log(user.isAdmin);
console.log(user.toString());  // user is inheriting the property of prototype object
console.log(Object.keys(user)); // It will all the keys present in the user object