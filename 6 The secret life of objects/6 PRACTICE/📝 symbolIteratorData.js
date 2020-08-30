/*
Add Symbol.iterator method to Matrix prototype, which generates MatrixIterator object, an iterable matrix. The next method creates object holding the current value, and then updates its content, moving to the next row. We can now loop over a matrix with for/of.
*/

class Matrix {
    constructor(width, height, content = (x, y) => undefined) {
        this.width = width;
        this.height = height;
        this.content = [];

        Matrix.prototype[Symbol.iterator] = function () {
            return new MatrixIterator(this)
        }

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                this.content[y * width + x] = content(x, y);
            }
        }
    }

    get(x, y) {
        return this.content[y * this.width + x];
    }

    set(x, y, value) {
        this.content[y * this.width + x] = value;
    }
}

class MatrixIterator {
    constructor(matrix) {
        this.matrix = matrix;
        this.x = 0;
        this.y = 0;
    }

    next() {
        if (this.y === this.matrix.height) return {done: true}

        let value = {x: this.x, y: this.y, value: this.matrix.get(this.x, this.y)};

        this.x++;
        if (this.x === this.matrix.width) {
            this.y++;
            this.x = 0;
        }
        return {value, done: false}
    }
}

let matrix=new Matrix(2,2, (x,y)=>`value ${x}, ${y}`);
for(let {x,y,value} of matrix){
    console.log(x,y,value);
};

