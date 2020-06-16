/* We’ll build a matrix class, acting as a two-dimensional array. 
The constructor function takes a width, height, and an optional content
function. There are get and set methods to retrieve and update elements
in the matrix. When looping over a matrix, we’ll have our iterator
produce objects with x, y, and value properties.*/

class Matrix {
    constructor(width, height, content = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = []; //empty array

/*Add iterator symbol method to Matrix prototype. Add creation of
MatrixIterator object to the symbol value, which takes this
matrix as iterable data structure. The appropriate prototype object
for a constructor is found by taking the prototype property of the
constructor function.*/
        Matrix.prototype[Symbol.iterator]=function(){ 
        return new MatrixIterator(this); 
        }
                
        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                //define symbol property   
                this.content[y * width + x] = content(x, y);
            }
        }
    }
    get(x, y) { //retrieve element
        return this.content[y * this.width + x];
    }
    set(x, y, value) { //add value to element
       this.content[y * this.width + x] = value;
    }
}
/*  we’ll have our iterator produce objects with x, y, and value props.
The MatrixIterator class tracks the progress of iterating over a matrix
in its x and y properties. The next method starts by checking whether the
bottom of the matrix has been reached. If it hasn’t, it first creates the
object holding the current value, and then updates its content, moving
to the next row if necessary.*/

class MatrixIterator {
    constructor(matrix) {
        this.x = 0;
        this.y = 0;
        this.matrix = matrix;
    }

    next() {
        if (this.y == this.matrix.height) return { done: true };

        let value = {
            x: this.x,
            y: this.y,
            value: this.matrix.get(this.x, this.y)
        };
        this.x++;
        if (this.x == this.matrix.width) {
            this.x = 0;
            this.y++;
        }
        return { value, done: false };
    }
}

// We can now loop over a matrix with for/of.
let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let { x: y, y, value } of matrix) {
    console.log(y, y, value);
}

// → 0 0 value 0,0
// → 1 0 value 1,0
// → 0 1 value 0,1
// → 1 1 value 1,1