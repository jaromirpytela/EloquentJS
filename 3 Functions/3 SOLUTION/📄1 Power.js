const powerLoop = function (base, exponent = 2) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}

console.log(powerLoop(2, 10));


function powerRec(base, exponent = 2) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * powerRec(base, exponent - 1);
    }
}

console.log(powerRec(2));
console.log(powerRec(2, 6));