/*
Property names are usually strings, but they can also be unique symbol properties.
1) Add a "toStringSymbol" symbol method to [1,2] array, which shows the length of array x as "x cm piece of yarn".
2) Add the "toStringSymbol" symbol method to the "stringObject" object to return "jute rope".
3) Iterate through "OK" string with Javascript Symbol.iterator Symbol property.
*/

let toStringSymbol = Symbol("to String");

Array.prototype[toStringSymbol] = function(){
    return (`${this.length} cm piece of yarn`);
}

let stringObject = {
    [toStringSymbol](){
        return `a jute rope`;
    }
}

console.log([1,2][toStringSymbol]());
console.log(stringObject[toStringSymbol]());


let OKIterator="OK"[Symbol.iterator]();
console.log(OKIterator.next());
console.log(OKIterator.next());
console.log(OKIterator.next());