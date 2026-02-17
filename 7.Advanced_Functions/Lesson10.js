/**
 * Recursion is the programming term where the function is called from itself.
 */

function factorial(n)
{
    if (n == 0) return 1;      // Base Case
    return n * factorial(n - 1);
}
    
  let num = 5;
  const fact = factorial(num);
  console.log(fact);