/** toUpperCse() and toLowerCase */

const displayMessage = "Are you good?";
console.log(displayMessage.toLowerCase());
console.log(displayMessage);
console.log(displayMessage.toUpperCase());

/** substring() */
const message = "How are you?";
const subString = message.substring(0, 10);
console.log(subString);

/** trim() */
const text = "      I love sports       "
console.log(text.length);
console.log(text.trim());
console.log(text.trim().substring(0, 6));