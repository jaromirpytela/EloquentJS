/* Write a range function that takes two arguments, start and end, and an optional third argument that indicates the “step” value. Return an array containing all the numbers from start up to (and including) end. If no step is given, the elements go up by increments of one, corresponding to the old behavior. Make sure it also works with negative step values.
You code here
*/

function range(start, end, step = start < end ? 1 : -1) {
    let array = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}

console.log(range(1, 10));
console.log(range(15, 5, -2));
//[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// [ 15, 13, 11, 9, 7, 5 ]


/* Write a sum function that takes an array of numbers and returns the sum of these numbers.
You code here
*/

function sum(array){
    let total=0;
    for(let value of array){
        total+=value;
    }
    return total;
}

//console.log(sum(range(1, 10))); //55







