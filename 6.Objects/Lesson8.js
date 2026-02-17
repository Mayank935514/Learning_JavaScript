/** Destructuring Object
 * It means umpacked the object in a single line.
 */

let obj = {
    name: "Ravi",
    address: {
        state: "UP",
        city: "MZN",
        locality: "Sadar"
    },
    courses: ["HTML","CSS","JAVAS"]
}
//  let {name, address, courses} = obj;
//  console.log(name);
//  console.log(address);

 let {name, ...rest} = obj;
 console.log(name);
 console.log(rest);

 let {name: userName} = obj;
 console.log(userName);

 let {address: {city}} = obj;
 console.log(city);