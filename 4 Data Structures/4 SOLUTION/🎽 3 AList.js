
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

console.log(arrayToList([10, 20])); // → {value: 10, rest: {value: 20, rest: null}}


function listToArray(list) {
    let array = [];
    for (let i = list; i>={}; i = i.rest) {
        array.push(i.value);
    }
    return array;
}

console.log(listToArray({value: 10, rest: {value: 20, rest: null}}));
console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]

