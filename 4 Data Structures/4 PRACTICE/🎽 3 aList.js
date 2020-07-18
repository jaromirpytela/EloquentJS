/*
 Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on. The resulting objects form a chain, like this:
 value: 1
 rest: -----------> value: 2
                    rest:-------------> value: 3
                                        rest: null
Create a list from the array [10,20] with "value" and "rest" properties.
Your code here */

function arrayToList(array){
    let list=null;
    for (let i=array.length-1; i>=0;i--){
        list={value: array[i], rest: list};
    }
    return list;
}
console.log(arrayToList([10, 20])); // → {value: 10, rest: {value: 20, rest: null}}
// Write a listToArray function that produces an array from a list.
function listToArray(list){
    let array=[];
    for (let i=list; i>={}; i=i.rest){
        array.push(i.value);
    }
    return array;
}
console.log(listToArray({value: 10, rest: {value: 20, rest: null}}));
console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30]
