/*
Class Map stores a mapping, and allows any kind of keys. Create ages object and use its get, set and has methods.
*/

let ages = new Map;
ages.set("Boris", 29);
ages.set("Julia", 56);
ages.set("Liang", 22);

console.log(`Julia is ${ages.get("Julia")}.`);
console.log(`Is Jack's age known? ${ages.has("Jack")}`);


