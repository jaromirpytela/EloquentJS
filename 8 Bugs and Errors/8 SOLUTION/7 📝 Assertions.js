
function firstElement(array) {
    if (array.length === 0) {
        throw new Error("firstElement called with []");
    }
    return array[0];
}

try {
    console.log(firstElement([]));
} catch (error) {
    console.log("Something went wrong: ", error);
}