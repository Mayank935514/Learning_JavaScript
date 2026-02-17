/** Creating HTML with JavaScript */

const parentConatiner = document.getElementById("parent-conatiner");

const cardContainer = document.createElement("div");
cardContainer.classList.add("card-conatiner");
 
// Create card image element
const cardImageElement = document.createElement("img");
cardImageElement.classList.add("img");

cardImageElement.setAttribute("src","https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/640px-Google_2015_logo.svg.png");
cardImageElement.setAttribute("alt","google-image");

const createTextElement = document.createElement("span");
createTextElement.innerText = "google-image";

cardContainer.appendChild(cardImageElement);
cardContainer.appendChild(createTextElement);
parentContainer.appendChild(cardContainer);
