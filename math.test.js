// math.test.js
const { factorial, fibonacci } = require('./math');

// Pruebas para Factorial
test('Factorial de 5 debe ser 120', () => {
    expect(factorial(5)).toBe(100); // <--- ERROR INTENCIONAL AQUÍ
});

test('Factorial de 0 debe ser 1', () => {
    expect(factorial(0)).toBe(1);
});

// Pruebas para Fibonacci
test('Fibonacci de 5 debe ser 5', () => {
    // Secuencia: 0, 1, 1, 2, 3, 5...
    expect(fibonacci(5)).toBe(5);
});

test('Fibonacci de 8 debe ser 21', () => {
    expect(fibonacci(8)).toBe(21);
});