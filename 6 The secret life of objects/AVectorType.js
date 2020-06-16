/*Write a class Vec that represents a 2D vector. It takes x and y
parameters (numbers), which it should save to properties of the
same name. Give the Vec prototype two methods, vecAddition and
vecSubtraction, that take another vector as a parameter and return
a new vector that has the sum or difference of the two vectors’
(this and the parameter) x and y values. Add a getter property
length to the prototype that computes the length of the vector—that
is, the distance of the point (x, y) from the origin (0, 0).*/

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
