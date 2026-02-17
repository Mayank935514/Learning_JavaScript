/**
 * Event Listener
 */
let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
console.log(startButton);
function showMessage(){
    console.log("Button Clicked");
}
// startButton.addEventListener("click", showMessage);

startButton.addEventListener("click", ()=>{
    startButton.innerText = "Begin";
    startButton.innerHTML = '<span>Lets Begin</span>';
});

stopButton.addEventListener("click", ()=>{
    // stopButton.classList.add("btn-red");
    stopButton.classList.toggle("btn-red");
})

