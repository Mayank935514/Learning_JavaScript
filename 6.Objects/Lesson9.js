/** Object Methods --> keys,values and entries */

const obj = {
    name: "Honey",
    age: 21,
    city: "Mumbai"
}

const entries = Object.entries(obj);     //Return array of key,value
console.log(entries);

const keys = Object.keys(obj);
console.log(keys);  //Return array of keys

const values = Object.values(obj);
console.log(values);   //return array of values