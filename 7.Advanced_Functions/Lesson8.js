/**
 * REST parameter --> ...rest/...args
 */
function calculateTotal(a,b,...rest){
    console.log(a);
    console.log(b);
    console.log(rest);
    }
    
    calculateTotal(2,3,4,5,7,8,9,11.16);