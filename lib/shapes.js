//classes and functions
//Exports triangle, circle and square classes

class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
        this.type = 'triangle';
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.type = 'circle';
    }
}

class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
        this.type = 'square';
    }
}