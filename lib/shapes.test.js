//jest tests for shapes

const { Triangle } = require('./shapes');

test('Render triangle', () => {
    const shape = new Triangle();
    triangle.setColor("blue");
    const renderedSVG = triangle.render('black', 'blue', 'Sample Text');
    expect(renderedSVG).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

