/** for in
 * checks poperty is in object or not
 */

const obj = {
    name: "Ravi",
    age: 21
}
const isPropertyFound = "name" in obj;
console.log(isPropertyFound);

for(let key in obj){
    console.log(key, obj[key]);
}