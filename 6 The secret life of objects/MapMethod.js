/* Transform an array coords [0,2,3] with division by
altitude 5 using .map method. Arrow functions do not bind
their own this. Method .call takes the this as first
argument, and treats further args as normal params.*/

function normalize() {
console.log(this.coords.map(n => n / this.altitude));
} //no parameters for normalize()
normalize.call({ coords: [0, 2, 3], altitude: 5 });