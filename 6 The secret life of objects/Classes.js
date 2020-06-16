// 1)Call hungry rabbit without using prototype with two different method calls
 function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let hungryRabbit = { type: "hungry", speak };
hungryRabbit.speak("I could go for a carrot.");
speak.call(hungryRabbit, "Crunch!");


// 2)Call killerRabbit with speak method originating from prototype without class notation.
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}; 


let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");


// 3)Call white and black rabbit with class notation.
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

// 4) Override the "speak" method for blackRabbit.
blackRabbit.speak= function(line){
    console.log(`The ${this.type} rabbit can not speak anymore.`)
};
blackRabbit.speak("Want to speak again");


