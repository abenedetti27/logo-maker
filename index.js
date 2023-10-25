//runs the application using import from lib

const readline = require('readline');
const fs = require('fs');
const svg = require('svg.js');

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

function getUserInput() {
    rl.question('Enter text: ', (text) => {
        rl.question('Enter text color: ', (textColor) => {
            rl.question('Choose a shape: ', (shape) => {
                rl.question('Enter shape color: ', (shapeColor) => {
                    rl.close();
                    generateLogo(text, textColor, shape, shapeColor);
                });
            });
        });
    });
}

function generateLogo(text, textColor, shape, shapeColor) {
    const draw = svg('logo').size(300, 200);
    const textElement = draw.text(text).fill(textColor).move(50, 100);
    let shapeElement;
    if(shape === 'circle'){
        shapeElement = draw.circle(100).fill(shapeColor).move(100, 50);   
    } else if (shape === 'triangle') {
        shapeElement = draw
            .line(100, 150, 150, 50)
            .stroke({width: 2, color: shapeColor})
            .plot(150, 50, 200, 150)
            .plot(100, 150, 200, 150)
    } else if (shape === 'square') {
        shapeElement = draw.rect(100, 100).fill(shapeColor).move(100, 50);
    }
    const generatedSVG = draw.svg();
    fs.writeFileSync('logo.svg', generatedSVG);
    console.log('Generated SVG logo successfully!');
}

getUserInput();

