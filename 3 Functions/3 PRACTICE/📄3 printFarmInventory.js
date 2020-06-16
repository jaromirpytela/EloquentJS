function printFarmInventory_1(cow, chicken) {
    let cowString = String(cow);
    //padding with 0
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);

    let chickenString = String(chicken);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} chicken`);
}

printFarmInventory_1(5, 8);

function addZeroWithLabel(number, label) {
    let numberString= String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory_2(cowNo, chickenNo, pigNo) {
    addZeroWithLabel(cowNo, "cows");
    addZeroWithLabel(chickenNo, "chickens");
    addZeroWithLabel(pigNo, "pigs");
}
printFarmInventory_2(1,2,3);

function addZeros(number, size){
    let numberString = String(number);
    while(numberString.length<size){
        numberString="0" + numberString;
    }
    return numberString;
}

function printFarmInventory3(cows, chicken, pigs) {
    console.log(`${addZeros(cows, 3)} Cows`);
    console.log(`${addZeros(chicken, 3)} Chicken`);
    console.log(`${addZeros(pigs, 3)} Pigs`);
}

printFarmInventory3(2,3,4);