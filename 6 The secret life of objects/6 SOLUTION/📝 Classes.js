console.log(`*****  Call hungry without using prototype with two different method calls  *****`)

 function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let hungryRabbit = { type: "hungry", speak };
hungryRabbit.speak("I could go for a carrot.");
speak.call(hungryRabbit, "Crunch!");

console.log(`*****  Call killer with speak method from prototype without class notation.  *****`)

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit gives a '${line}'.`);
    }
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("screach");

console.log(`***** Call white and black with class notation *****`)

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let whiteRabbit = new Rabbit("white");
let blackRabbit = new Rabbit("black");
whiteRabbit.speak("I can speak!");
blackRabbit.speak("Me too.");

console.log(`**** Override the speak method for blackRabbit, use speak call ****`);


blackRabbit.speak= function(line){
    console.log(`The ${this.type} rabbit ${line}`)
};
blackRabbit.speak(`can not speak`);
speak.call(blackRabbit, `can not speak`)

