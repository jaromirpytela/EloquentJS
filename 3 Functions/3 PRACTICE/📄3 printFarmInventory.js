/* The while loops keep adding zeros in front of the number strings until they are at least three characters long. It conflates three things—printing, zero-padding, and adding a label—into a single function.

Your code here */

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


/* A function with a nice, obvious name like zeroPad makes it easier for someone who reads the code to figure out what it does. And such a function is useful in more situations than just this specific program.

Your code here */

function zeroPad(number, size){
    let numberString = String(number);
    while(numberString.length<size){
        numberString="0" + numberString;
    }
    return numberString;
}

function printFarmInventory2(cows, chicken, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chicken, 3)} Chicken`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory2(2,3,4);