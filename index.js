//runs the application using import from lib

const readline = require('readline');
const fs = require('fs');
const svg = require('svg.js');

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

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

fs.writeFileSync('logo.svg', generatedSVG);


