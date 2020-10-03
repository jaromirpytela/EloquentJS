// Examine whether prototype is present in 1) empty object, 2) prototype itself, 3) Math.max and 4) empty array.

console.log(Object.getPrototypeOf({}===Object.prototype));
console.log(Object.getPrototypeOf(Object.prototype));
console.log(Object.getPrototypeOf(Math.max)===Function.prototype);
console.log(Object.getPrototypeOf([]));