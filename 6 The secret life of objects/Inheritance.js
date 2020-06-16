/*Inside class methods, super provides a way to call methods as
they were defined in the superclass. The set method again uses super
to call a specific method from the superclass’ set of methods. We are
redefining set, but do want to use the original behavior. Inside class
methods, super provides a way to call methods as they were defined in
the superclass.*/

class Matrix {
    constructor(width, height, position = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.position = [];

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.position[y * width + x] = position(x, y);
            }
        }
    }
    get(x, y) { //retrieve element number
        return this.position[y * this.width + x];
    }
    set(x, y, value) {  //update element number
        this.position[y * this.width + x] = value;
    }
}
class SymmetricMatrix extends Matrix {
    constructor(size, position = (x, y) => undefined) {
        super(size, size, (x, y) => {
            if (x < y) return position(y,x);
            else return position(x, y);
        });
    }

    set(x, y, value) {
        super.set(x, y, value);
        if (x < y) {
            super.set(y, x, value);
        }
    }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));

// → 3,2