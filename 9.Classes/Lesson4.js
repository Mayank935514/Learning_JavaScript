/** Static Methods --- these are the methods which is available for the entire class and for all the objects.
 * Static Properties
 */
let id =1;
class Children{
    // static id=1;
    constructor(name,age){
        this.name=name;
        this.age=age;
        this.id=id++;
        //this.id=Children.id++;
    }
    static sortByAge(a,b){
        return a.age - b.age;
    }
}
const child1 = new Children("Mayan",21);
const child2 = new Children("Ravi",23);
const child3 = new Children("Rahul",20);

let arr = [child1,child2,child3];
console.log(arr.sort(Children.sortByAge));