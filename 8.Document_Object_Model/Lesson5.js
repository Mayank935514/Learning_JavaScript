/** Event Bubbling -- means bubbling from bottom to top, default value of third parameter in synatx is false i.e. this is in bubbling phase
 * Capturing -- means captures from top to bottom, third parameter in syntax is true for capturing.
 */
let form = document.querySelector("#form");
let div = document.querySelector("#div");
let para = document.querySelector("#p");

para.addEventListener("click", ()=>{
    alert("para tag");
},false);

div.addEventListener("click", ()=>{
    alert("div tag");
},false);

form.addEventListener("click", ()=>{
    alert("form tag");
},false);