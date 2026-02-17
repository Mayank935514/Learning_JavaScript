/** Pure Functions
 * 1. It takes an argument.
 * 2. It should return something.
 * 3. For some input, you should get the same output.
 * 4. The result should not be influenced by outer parameter.
 * 5. It should not mutate the original argument..
 */

function getDoubleValue(number){
    return number * 2;
}
const result = getDoubleValue(5);
console.log(result);