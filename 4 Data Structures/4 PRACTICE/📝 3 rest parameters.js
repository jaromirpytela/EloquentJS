// Reproduce Math.max function that accepts any number of arguments and computes the maximum of all the arguments it is given

function max(...numbers){
    let result = -Infinity;
    for (let number of numbers){
        if (number>result) result=number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));
let numbers = [5, 1, 7];
console.log(max(...numbers));
console.log(max(4,1,-2,...numbers, 9));
