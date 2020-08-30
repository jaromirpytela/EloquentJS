
function normalize() {
console.log(this.coords.map(n => n / this.altitude));
} //no parameters for normalize()
normalize.call({ coords: [0, 2, 3], altitude: 5 });