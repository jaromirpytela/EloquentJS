/*
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Another way is: 0 is even - 1 is odd, for any other number n, its evenness is the same as n - 2. Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean. Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
//console.log(isEven(-1));
// → false