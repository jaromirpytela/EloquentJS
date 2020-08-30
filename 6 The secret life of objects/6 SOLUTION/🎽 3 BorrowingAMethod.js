
let map = {one: true, two: true, hasOwnProperty: false};

console.log(hasOwnProperty.call(map, "hasOwnProperty"));
console.log(map.hasOwnProperty);

