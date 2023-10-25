//runs the application using import from lib

const readline = require('readline');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function getUserInput() {
    rl.question('Enter text (up to three characters): ', (text) => {
        rl.question('Enter text color (keyword or hexidecmial number): ', (textColor) => {
            rl.question('Choose a shape (circle, triangle, square): ', (shape) => {
                rl.question('Enter shape color (keyword or hexidecmial number): ', (shapeColor) => {
                    rl.close();
                    generateLogo(text, textColor, shape, shapeColor);
                });
            });
        });
    });
}

function generateLogo(text, textColor, shape, shapeColor) {
    let shapeElement;
    switch(shape) {
        case 'circle':
            shapeElement = new Circle(100);   
            break;
        case 'triangle':
            shapeElement = new Triangle(100, 100);   
            break;
        case 'square':
            shapeElement = new Square(100);   
            break;    
        default:
            console.log('Invalid shape selection');
            return;
    }
    const generatedSVG = shapeElement.render(textColor, shapeColor, text);
    fs.writeFileSync('logo.svg', generatedSVG);
    console.log('Generated SVG logo successfully!');
}

getUserInput();

