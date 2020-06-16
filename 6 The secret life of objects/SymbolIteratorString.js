/*The string you pass to Symbol is included when you convert it to a string,
and can make it easier to recognize a symbol when, for example, showing it in
the console. But it has no meaning beyond that—multiple symbols may have
the same name.*/
const toStringSymbol = Symbol("to String");
Array.prototype[toStringSymbol] = function() {
return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());

/*Symbol.iterator symbol is a symbol value defined by
the language, stored as a property of the Symbol function).
Not "OK" but okIterator symbol iterates when calledn
It returns an object that provides a second interface, iterator. */

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
console.log(okIterator.next());
console.log(okIterator.next());
