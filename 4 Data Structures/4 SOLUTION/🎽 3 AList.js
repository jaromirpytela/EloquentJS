/* Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on. The resulting objects form a chain, like this:
 value: 1
 rest: -----------> value: 2
                    rest:-------------> value: 3
                                        rest: null
*/

// 1) From the original array exclude array[i] element: define it as a property value. Define another property as "rest:", which includes both value (20) and rest properties (null).

function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

console.log(arrayToList([10, 20])); // → {value: 10, rest: {value: 20, rest: null}}


console.log("***************************************")
// 2) Also write a arrayToList function that produces an array from a list.arrayToList: iterate through the list with interval i.rest.

function listToArray(list) {
    let array = [];
    for (let i = list; i; i = i.rest) {
        array.push(i.value);
    }
    return array;
}

console.log(listToArray({value: 10, rest: {value: 20, rest: null}}));
console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]



console.log("***************************************")
// 3) Write a helper function "prepend", which takes an element and a list and creates a new list that adds the element to the front of the input list.

function prepend(value, list) {
    return {value, rest: list};
}

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

console.log("***************************************")

// 4) Add "nth", which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element. If you haven’t already, also write a recursive version of nth.

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20