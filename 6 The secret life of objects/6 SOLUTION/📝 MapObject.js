
let ages = new Map();


ages.set("Boris" , 30);
ages.set("Julia", 56);

console.log(`Julia is ${ages.get("Julia")}.`);
console.log("Is Jack's age known?", ages.has("Jack"));


