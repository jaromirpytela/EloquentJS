// 1) Write a range function that takes two arguments, start and end, and an optional third argument that indicates the “step” value used when building the array. Return an array containing all the numbers from start up to (and including) end. If no step is given, the elements go up by increments of one, corresponding to the old behavior. Make sure it also works with negative step values.

console.log(range(1, 10)); //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(15, 5, -2)); // [ 15, 13, 11, 9, 7, 5 ]

// 2) Write a sum function that takes an array of numbers and returns the sum of these numbers.

console.log(sum(range(1, 10))); //55







