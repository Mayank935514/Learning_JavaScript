/**Private Properties */
class User{
    #id=123;    // Making id as private by #
    changeId(id){     // Method to change the id
        this.#id=id;
    }
}
const user = new User();
user.changeId("xyz");
console.log(user);