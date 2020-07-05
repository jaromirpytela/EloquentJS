/* Function addZeroWithLabel conflates three things — printing, zero-padding, and adding a label — into a single function.
Your code here
*/
function addZeroWithLabel(number, label) {
    let toString = String(number);
    while (toString.length < 3) {
        toString = "0"+toString;
    }
    console.log(`${toString} ${label}`);
}
function printFarmInventory_1(cowNo, chickenNo, pigNo) {
    addZeroWithLabel(cowNo, "Cows");
    addZeroWithLabel(chickenNo, "Chicken");
    addZeroWithLabel(pigNo, "Pigs");
}
printFarmInventory_1(1, 2, 3);

/* Function zeroPad is useful in more situations. It only prints the "number" argument and adds zeroes to reach the "width", which is passed as another argument.
Your code here
*/
function zeroPad(number, width){
    let toString=String(number);
    while(toString.length<3){
        toString="0"+toString;
    }
    return toString;
}
function printFarmInventory2(CowNo, ChickenNo, PigNo){
     console.log(zeroPad(CowNo, 3)+" Cows");
     console.log(zeroPad(ChickenNo, 3)+" Chicken");
     console.log(zeroPad(PigNo, 3)+" Pigs");

}
printFarmInventory2(7, 16, 3);