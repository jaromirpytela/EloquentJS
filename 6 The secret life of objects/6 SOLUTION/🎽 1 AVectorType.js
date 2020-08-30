
class Vec {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    vecAddition(other){
      return new Vec(this.x + other.x, this.y + other.y);
    }
    vecSubtraction(other) {
      return new Vec(this.x - other.x, this.y - other.y);
    }
    get length() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
}
  
console.log(new Vec(1, 2).vecAddition(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).vecSubtraction(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
