/** Mouse Event */

let input = document.querySelector(".input");
// input.addEventListener("mousedown",(event)=>{
//     console.log(event.button)
// })

// input.addEventListener("mousedown",(event)=>{
//     let xcor = event.pageX;
//     let ycor = event.pageY;
//     let cors = `Xcor - ${xcor} and Ycor - ${ycor}`;
//     console.log(cors);
// });

// input.addEventListener("mousedown",(event)=>{
//     let xcor = event.clientX;
//     let ycor = event.clientY;
//     let cors = `Xcor - ${xcor} and Ycor - ${ycor}`;
//     console.log(cors);
// });

document.body.addEventListener("mousedown",(event)=>{
    let xcor = event.clientX;
    let ycor = event.clientY;
    let cors = `Xcor - ${xcor} and Ycor - ${ycor}`;
    console.log(cors);
});