console.log(`*****  Call speak method of hungryRabbit object without using prototype. Use two different method calls  *****`);
// The HUNGRY rabbit says I COULD GO FOR A CARROT.
// The HUNGRY rabbit says CRUNCH!
// Your code here.

function speak(line) {
    console.log(`The ${this.type}rabbit says ${line}`)
}

let hungryRabbit = {type: "white", speak}

hungryRabbit.speak("I COULD GO FOR A CARROT");
speak.call(hungryRabbit, "CRUNCH");

console.log(`*****  Call killer with prototype speak method without class notation.  *****`);
// The killer rabbit says 'SKREEEE!'
// Your code here.
let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";


speak.call(killerRabbit, "SKREEE");
console.log(`*****  Call white and black with class notation  *****`);
// The white rabbit says 'I can speak!'
// The black rabbit says 'Me too.'
//Your code here.
class Rabbit {
    constructor(type) {
        this.type = type;
    }

    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}
let whiteRabbit=new Rabbit("white");
let blackRabbit=new Rabbit("black");
whiteRabbit.speak("I can speak.");
blackRabbit.speak("Me too.");



console.log(`****  Override the speak method for blackRabbit  ****`);
// The BLACK rabbit CAN NOT SPEAK.
//Your code here.

blackRabbit.speak=function (line){
    console.log(`The ${this.type} rabbit ${line}`);
}
blackRabbit.speak
blackRabbit.speak(`can not speak`);
speak.call(blackRabbit, `can not speak`);





