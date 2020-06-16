/* From 1 repeatedly either add 5 or multiply by 3. Write a function that,
tries to find a sequence of such additions and multiplications that produce
a given number. */

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(13));
// → (((1 * 3) + 5) * 3)
