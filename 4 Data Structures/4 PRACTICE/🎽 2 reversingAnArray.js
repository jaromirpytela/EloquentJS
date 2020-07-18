// Write reverseArray function that takes an array as argument and produces a new array that has the same elements in the inverse order.

function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray([1, 2, 3, 4, 5]));

// Write reverseArrayInPlace function, which modifies the array given as argument by reversing its elements.
function reverseArrayInPlace(array){
for(let i=0; i<=Math.floor(array.length/2);i++){
    let old = array[i];
    array[i]=array[array.length-1-i];
    array[array.length-1-i]=old;
}
return array;
}

console.log(reverseArrayInPlace(["A", "B", "C"]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
