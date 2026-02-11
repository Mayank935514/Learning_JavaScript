/** Array Methods -- pop, slice, splice */

// pop -- removes last element //
let courses = ["HTML", "CSS", "JavaScipt", "React", "NodeJs"];
console.log(courses);
let removedItem = courses.pop();
console.log(removedItem);
console.log(courses);

// slice //
let sliceItem = courses.slice(3,4); // remove the elements starting from index-3 till index-4 but don't remove index-4 element
console.log(sliceItem);
console.log(courses);

// splice -- removes elements from an array and if necessary, insert new element in that place
let courses1 = ["AI","ML", "DataScience", "Full Stack Developer","Cyber"];
courses1.splice(2,2); // remove 2 items from the index-2
console.log(courses1);
courses1.splice(2,0,"Civil"); // Before index-3 do not remove any item and insert Civil
console.log(courses1);