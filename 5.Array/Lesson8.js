/** Destructing an array */

const number = [1,2,3];
const [a,b,c,courses] = [1,2,3,["HTML","CSS","JAVAS"]];  // Destruturing an array
console.log(a);
console.log(b);
console.log(c);
console.log(courses);

// Swap Numbers //
let e = 5;
let f = 7;
[e,f] = [f,e];
console.log(e);
console.log(f);