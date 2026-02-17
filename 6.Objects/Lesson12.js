/** Function Borrowing - Call, Apply and Bind */

const user1 = {
    name: "Ravi",
    age: 20
}
const user2 = {
    name: "Honey",
    age: 23
}
const user3 = {
    name: "Mayank",
    age: 21
}
function sayHi(degree, year){
    console.log(this.name, degree, year);
}
sayHi.call(user1, "Btech", 2022);  //the value of this is user1
sayHi.call(user2);  //the value of this is user2
sayHi.call(user3);  //the value of this is user3

// Apply //
sayHi.apply(user1, ["Cyber", 2023]);  // In Apply, we have to pass an argument as an array
sayHi.apply(user2);
sayHi.apply(user3);

//Bind -- It returns a function so we have assign it to the variable //
const result = sayHi.bind(user3, "CSE", 2024);
result();