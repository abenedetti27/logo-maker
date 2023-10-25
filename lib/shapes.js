//classes and functions
//Exports triangle, circle and square classes

class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
        this.type = 'triangle';
    }
    render(textColor, shapeColor, text){
        return `<polygon points="150, 18, 244, 182, 56, 182" fill="${shapeColor}" />`;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.type = 'circle';
    }
    render(textColor, shapeColor, text){
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${shapeColor}" />`;
}
}

class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
        this.type = 'square';
    }
    render(textColor, shapeColor, text){
        return `<rect x="50" y="50" width="$this,sidelength}" height="${this.sidelength}" fill="${shapeColor}" />`;
}
}

module.exports = { Triangle, Circle, Square };