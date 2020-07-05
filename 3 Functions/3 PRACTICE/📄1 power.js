/* If you don’t provide the second argument, it will default to two. The function calls itself multiple times with ever smaller exponents to achieve the repeated multiplication.
*/
function power_1(base, exponent =2){
    let output=1;
    for(let i=0; i<exponent; i++){
        output=base*output;
    }
    return output;
}
console.log(power_1(2, 2));

/* Recursion allows some functions to be written in a different style.  The function calls itself multiple times with ever smaller exponents to achieve the repeated multiplication.
*/

// console.log(power_2(2, 3));
