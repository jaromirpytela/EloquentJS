// Values of type string, number, and Boolean are not objects. But these types do have built-in properties.

console.log("coconuts".slice(4, 7));


function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"], 2));

// 3. Display index of "u" and "ee"
console.log("coconut".indexOf("u"));
console.log("one two three".indexOf("ee"));

// 4. Remove whitespace from the start and end of " okay \n ".
console.log(" okay \n ".trim());

// 5. Create 006 by padding.
console.log(String(6).padStart(3, "0"));

// 6. Create "LALALA" by "LA" repetition.
console.log("LA".repeat(3));
