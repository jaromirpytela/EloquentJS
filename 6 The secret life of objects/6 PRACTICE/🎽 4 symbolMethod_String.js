/*
Property names are usually strings, but they can also be unique symbol properties.
1) Add a "to String" symbol method to [1,2] array, which returns "2 cm piece of yarn".
2) Add the "toString" symbol method to the "stringObject" object to return "jute rope".
3) Iterate through "OK" string with Javascript Symbol.iterator Symbol property.
*/

let toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol]= function(){
    return `${[1,2].length} cm piece of yarn`;
}
let stringObject={[toStringSymbol](){return "a jute rope";}};
console.log(toStringSymbol);
console.log([1,2].toString());
console.log([1,2][toStringSymbol]());

console.log(stringObject[toStringSymbol]());

let okIterator="OK"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());

/*

*/