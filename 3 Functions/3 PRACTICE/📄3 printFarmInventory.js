/*It conflates three things—printing, zero-padding, and adding a label—into a single function. That name, printZeroPaddedWithLabel, is a little awkward. It conflates three things—printing, zero-padding, and adding a label—into a single function.
Your code here.
*/
function addZeroWithLabel(number, label) {
    let numberString= String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory_1(cowNo, chickenNo, pigNo) {
    addZeroWithLabel(cowNo, "cows");
    addZeroWithLabel(chickenNo, "chickens");
    addZeroWithLabel(pigNo, "pigs");
}
printFarmInventory_1(1,2,3);


/*A function with a nice, obvious name like zeroPad makes it easier for someone who reads the code to figure out what it does. And such a function is useful in more situations than just this specific program.
Your code here
*/

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory2(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory2(7, 16, 3);