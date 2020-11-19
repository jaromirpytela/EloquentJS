/*
Write a function called withBoxUnlocked that takes a function value "body" as argument, unlocks the box, runs the function (Piece of gold/Pirates on horizon. Abort!) and then ensures that the box is locked again before returning, regardless of whether the argument function returned normally or threw an exception.
 */

const box={
    locked: true,
        unlock(){this.locked=false},
        lock(){this.locked=true},
    _content:[],
    get content(){
        if(this.locked) throw new Error("Locked");
        return this._content;
    }
};

function withBoxUnlocked(body){
    let locked=box.locked;
    if(!locked) return body();
    box.unlock();
    try{
return body()
    } finally {
        box.lock()
    }
}

withBoxUnlocked(function (){box.content.push("Piece of gold")});
console.log(box._content, box.locked);

try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on horizon. Abort!");
    });
}catch(e){
console.log("Error raised: ", e)
}

console.log(box._content, box.locked);




