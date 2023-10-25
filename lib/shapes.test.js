//jest tests for shapes
const { Triangle, Circle, Square } = require('./shapes');


test('Render triangle', () => {
    const triangle = new Triangle(100, 100);
    const renderedSVG = triangle.render('black', 'blue', 'Sample Text');
    expect(renderedSVG).toMatchSnapshot('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue"/>\n    <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Sample Text</text></svg>');

});

test('Render circle', () => {
    const circle = new Circle(100);
    const renderedSVG = circle.render('black', 'red', 'Sample Text');
    expect(renderedSVG).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Sample Text</text></svg>');
});

test('Render square', () => {
    const square = new Square(100);
    const renderedSVG = square.render('black', 'green', 'Sample Text');
    expect(renderedSVG).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="50" width="100" height="100" fill="green"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Sample Text</text></svg>');
});


