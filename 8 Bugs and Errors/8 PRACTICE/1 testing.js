/*
Create a set of tests for the toUpperCase method. Convert some Latin text and a Greek text Χαίρετε / ΧΑΊΡΕΤΕ.
*/

function toUppercaseTest(label, test) {
    if (!test) console.log(label);
}

toUppercaseTest("Latin", "Hello".toUpperCase()==="HELLO");
toUppercaseTest("Greek", "Χαίρετε".toUpperCase()=== "ΧΑΊΡΕΤΕ");