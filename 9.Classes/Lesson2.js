/** Class */
class User{
    constructor(name,role,isAdmin,isLoggedIn){
        (this.name=name),
        (this.role=role),
        (this.isAdmin=true),
        (this.isLoggedIn=false);
    }
    displayInfo(){
        console.log(`${this.name} is a ${this.role}`);
    }
}
const user1 = new User("Mayan", "SDE", true, false);
const user2 = new User("Rahul", "EEE", false, false);
const user3 = new User("Jai", "ME", false, true);
console.log(user1.displayInfo());
console.log(user2);
console.log(user3);