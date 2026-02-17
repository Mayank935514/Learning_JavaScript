/** Function as Object property */
const obj = {
    name: "Mayank",
    greetMessage: function(){
        console.log("Hello World");
    },
    bye(){
        console.log("Tata Bye");
    }
}
console.log(obj);
obj.bye();
