const power_1 = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power_1(2, 10));

//If you don’t provide te second argument, it will default to two.
function power_2(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power_2(4));
console.log(power_2(2, 6));

//Recursion allows some functions to be written in a different style
function power_3(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power_3(base, exponent - 1);
    }
}

console.log(power_3(2, 3));
