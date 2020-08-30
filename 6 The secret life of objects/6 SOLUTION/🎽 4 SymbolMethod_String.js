
const toStringSymbol = Symbol("toString");

Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
};

console.log(toStringSymbol);
console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());



let stringObject = {
    [toStringSymbol]() { return "a jute rope"; }
};

console.log(stringObject[toStringSymbol]());



let okIterator = "OK"[Symbol.iterator]();

console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());
