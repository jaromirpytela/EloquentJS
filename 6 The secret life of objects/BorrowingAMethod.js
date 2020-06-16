/*Your map needs to include the word "hasOwnProperty"
You won’t be able to call that method anymore, because
the object’s own property hides the method value. Can
you think of a way to call hasOwnProperty on an object
that has its own property by that name?*/


let map = {one: true, two: true, hasOwnProperty: false};

console.log(hasOwnProperty.call(map, "hasOwnProperty"));
console.log(map.hasOwnProperty);

