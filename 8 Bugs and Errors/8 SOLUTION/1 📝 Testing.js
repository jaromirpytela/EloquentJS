function test(info, body) {
    if (!body()) console.log(`Failed: ${info}`);
}

test("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() === "hELLO";
});
test("convert Greek text to uppercase", () => {
    return "Χαίρετε".toUpperCase() === "ΧΑΊΡΕΤΕ";
});
