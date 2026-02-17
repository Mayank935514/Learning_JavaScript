/** Optional Chaining
 * It is an easier way to access nested property of an object.
 * It uses ? means before ? if the value of the property is undefined then it will not check the property after ?
 *                          if the value of the property is object then it will check the property after ?
 */

const user = {
    name: "Rahul",
    age: 65,
    address: {
        city: "MZN",
        state: "UP"
    },
    likes: "Eat Sleep sing"
}
console.log(user.address?.city);  // Optional Chaining
console.log(user.getDisplay?.());
