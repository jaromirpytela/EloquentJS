console.log(`*****  Call speak method of hungryRabbit object without using prototype. Use two different method calls  *****`);

function speak(line) {
    console.log(`The ${this.type} rabbit says ${line}.`);
}

let hungryRabbit = {type: "HUNGRY", speak};

speak.call(hungryRabbit, "I COULD GO FOR A CARROT.");
hungryRabbit.speak("Me too");
// The HUNGRY rabbit says I COULD GO FOR A CARROT.
// The HUNGRY rabbit says CRUNCH!


console.log(`*****  Call KILLER without class notation using prototype.  *****`);
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit gives a ${line}.`);
    }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("screach");
// The killer rabbit gives a screach.
console.log(`*****  Call WHITE and BLACK with class notation  *****`);
class Rabbit{
    constructor(type) {
        this.type = type;
    }
    speak(line){
console.log(`The ${this.type} rabbit says ${line}.`)
    }
}
let whiteRabbit = new Rabbit("white");
whiteRabbit.speak("I can speak");
let blackRabbit=new Rabbit("black");
blackRabbit.speak("Me too");
// The white rabbit says 'I can speak!'
// The black rabbit says 'Me too.'

console.log(`****  Override the speak method for blackRabbit ****`);
blackRabbit.speak = function(line){
    console.log(`The ${this.type} rabbit ${line}.`)
};
blackRabbit.speak("CAN NOT SPEAK");
// The BLACK rabbit CAN NOT SPEAK.








