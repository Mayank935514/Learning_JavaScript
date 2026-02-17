/** Computed Properties
 * means Adding property to the object
 */
const readLineSync = require("readline-sync");
const course = readLineSync.question("Which course do you want to purchase?");

const obj = {
    name: "Mayank",
    age: 21,
    [course]: "Course not availbale"
}
obj.city = "Muzaffarnagar";
obj.state = "Uttar Pradesh";
console.log(obj[course]); // Computed property