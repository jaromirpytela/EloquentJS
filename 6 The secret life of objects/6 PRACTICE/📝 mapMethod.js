/*
Arrow functions do not bind their own this &&& method .call takes the this (object) as argument.
Transform coords [0,2,3] with function normalize as division by altitude 5, both provided as one object.
*/

function normalize() {
    console.log(this.coords.map(n => n / this.altitude));
}

normalize.call({coords:[0,2,3], altitude:5});