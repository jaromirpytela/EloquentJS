//1
function speak(line){
    console.log(`The ${this.type} rabbit says ${line}`);
}
let hungryRabbit = {type: "hungry", speak};
hungryRabbit.speak(`I could use a carrot right now.`);
speak.call(hungryRabbit, `Crunch!`);

//2
let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREE!");

//3
class Rabbit{
    constructor (type){
        this.type = type;
    }
    speak(line){
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}
let whiteRabbit = new Rabbit("white");
let blackRabbit = new Rabbit("black");

whiteRabbit.speak("I can speak!");
blackRabbit.speak("Me too.");

blackRabbit.speak=function(line){
    console.log(`The ${this.type} rabbit can not speak anymore.`);
}
blackRabbit.speak("Mee too");







