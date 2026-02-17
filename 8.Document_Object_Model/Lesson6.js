/** Event Delegation
 * Event delegation is a technique where you add a single event listener to a parent element instead of adding multiple event listeners 
 * to each child element. This takes advantage of event bubbling, where an event triggered on a child element propagates (or "bubbles up") 
 * to its parent elements. By placing the event listener on a common ancestor, you can capture events from all its children.
 */

let btnContainer = document.querySelector("#btn-container");

btnContainer.addEventListener("click", (event) => {
  let btnText = event.target.innerText;
  if (btnText === "Red") {
    event.target.classList.toggle("btn-red");
  }
});