/** String Method
 * charAt() | charCodeAt()
 */

const displayMessage = "How are you?";
const length = displayMessage.length;
console.log(length);
const index =6;
const char = displayMessage.charAt(index);
console.log(char);

// charCodeAt()--> this method will give ASCII code of given character
const AScii = displayMessage.charCodeAt(index);
console.log(AScii);