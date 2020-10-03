/*
JS class Map stores a mapping, and allows any kind of keys. Create an ages object and use its get, set and has methods.
*/

let ages = new Map;

ages.set("Boris" , 30);
ages.set("Julia", 56);

console.log(`Julia is ${ages.get("Julia")}.`);
console.log(`Is Borise's age known? ${ages.has("Boris")}`);


