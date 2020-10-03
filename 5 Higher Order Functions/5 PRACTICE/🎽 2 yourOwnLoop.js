/*
Write a higher-order function loop that provides something like a for loop
statement. It takes a value, a test function, an update function, and a body
function. Each iteration, it first runs the test function on the current loop
value, and stops if that returns false. Then it calls the body function, giving
it the current value. And finally, it calls the update function. Use a regular loop to do the actual looping.

Your code here. */

function loop(start, test, update, body){
    for(let value = start; test(value); value=update(value)){}
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

