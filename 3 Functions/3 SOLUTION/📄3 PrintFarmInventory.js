function addZeroWithLabel(number, label) {
    let toString= String(number);
    while (toString.length < 3) {
        toString = "0" + toString;
    }
    console.log(`${toString+" "+label}`);
}

function printFarmInventory_1(cowNo, chickenNo, pigNo) {
    addZeroWithLabel(cowNo, "cows");
    addZeroWithLabel(chickenNo, "chickens");
    addZeroWithLabel(pigNo, "pigs");
}
printFarmInventory_1(1,2,3);

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