//classes and functions
//Exports triangle, circle and square classes

class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
        this.type = 'triangle';
    }
    render(textColor, shapeColor, text){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}"/>
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
        this.type = 'circle';
    }
    render(textColor, shapeColor, text){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="${this.radius}" fill="${shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
}
}

class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
        this.type = 'square';
    }
    render(textColor, shapeColor, text){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="${this.sideLength}" height="${this.sideLength}" fill="${shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    }
}

module.exports = { Triangle, Circle, Square };