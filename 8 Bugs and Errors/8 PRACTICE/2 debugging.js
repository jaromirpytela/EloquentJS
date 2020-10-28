/*
Convert a whole positive or negative number to a numeral system based on given base. The function numberToString repeatedly picks out the last digit and then divides the number. View the steps using debugger.
 */

function numberToString(n, base) {
    let result = "", sign = "";
    if (n < 0) {
        n = -n;
        sign = "-";
    }
    do {
        result = String(n % base) + result;
        n = Math.floor(n / base);
    } while (n > 0);
    return sign + result;
}

console.log(numberToString(-13, 10));