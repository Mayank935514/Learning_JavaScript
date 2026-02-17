/** Objects  --> {key: value} 
 * Keys should only be string otherwise javascript will convert the key into string
 * values can be anything
*/

 //Object Literal//
const obj = {
    name: "Mayank",  // property
    age: 21,
    job: "Mentor",
    courses: ["HTML","CSS","JavaScript"],
    "is Admin": "true" 
};
console.log(obj);
console.log(obj.age); // to access any property of the object
console.log(obj.name);
// or we can access in another way
console.log(obj["job"]);
console.log(obj["is Admin"]);