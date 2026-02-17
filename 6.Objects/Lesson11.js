/**new keyword and Constructor functions
 * constructor functions technically are regular functions. They have 2 conventions though
 * They are named with capital letter first.
 * They should be executed only with "new" operator.
 */

function User(name, age){
    this.name = name;
    this.age = age
}
const user = new User("Honey",21);  //It will create an object.
console.log(user);
console.log(user.name);
console.log(user.age);