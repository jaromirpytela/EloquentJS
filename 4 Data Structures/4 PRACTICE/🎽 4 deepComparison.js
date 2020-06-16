// The == operator compares objects by identity. But sometimes, you would prefer to compare the values of their actual properties. Write a function that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call. To find out whether to compare two things by identity (===) or by looking at their properties, you can use the "typeof" operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object". The Object.keys function will be useful when you need to go over the properties of objects to compare them.

let obj = {here: {is: "an"}, object: 2};

function deepEqual(a, b) {
    if (a === b) return true;
    if (a == null || typeof (a) != "object" || b == null || typeof (b) != "object") return false;

    let aKeys = Object.keys(a), bKeys = Object.keys(b);
    if (aKeys.length != bKeys.length) return false;

    for (let key of aKeys) {
        if (!bKeys.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
}

console.log(deepEqual(obj, obj)); //true
console.log(deepEqual(obj, {here: 1, object: 2})); //false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); //true
