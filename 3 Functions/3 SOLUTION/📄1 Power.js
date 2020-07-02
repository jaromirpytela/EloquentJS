function power_1(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}

console.log(power_1(4));
console.log(power_1(2, 6));


function power_2(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power_2(base, exponent - 1);
    }
}

console.log(power_2(2, 3));
