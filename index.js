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
    const generatedSVG = draw.svg();
    fs.writeFileSync('logo.svg', generatedSVG);
    console.log('Generated SVG logo successfully!');
}

getUserInput();

