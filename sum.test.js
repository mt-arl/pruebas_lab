// sum.test.js
const sum = require('./sum');

test('suma 1 + 2 para que sea igual a 3', () => {
    expect(sum(1, 2)).toBe(3);
});