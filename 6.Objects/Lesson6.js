/** Object reference and shallow copy */

const person1 = {
    name: "Mayank",
    age: 21,
    address: {
        city: "Mzn",
        state: "UP"
    }
}
console.log(person1);

const person2 = person1;
console.log(person2);

person2.name = "Honey";
person1.age = 32;
console.log(person1);
console.log(person2);

const person3 = Object.assign({},person1);   //Object.assign can access property of an object but nested property 
person3.name = "Ravi";
person3.age = 23;
person3.address.city = "Mumbai";
console.log(person1);
console.log(person3);