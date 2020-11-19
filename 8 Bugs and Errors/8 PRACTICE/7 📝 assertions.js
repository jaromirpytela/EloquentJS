/*
Write firstElement function, which should never be called on empty arrays. Instead of silently returning undefined, blow up the program immediately.
 */

function firstElement(array) {
    if (array.length === 0) {
        throw new Error("First element called with []")
    }
    return array[0];
}

try {
    console.log(firstElement([5]));
} catch (error) {
    console.log("Something went wrong:" + error);
}
