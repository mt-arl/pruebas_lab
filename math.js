

// Funcion para calcular el factorial de un número
function factorial(n) {
    if (n < 0) return null; // Manejo básico de errores
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Función para calcular Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Exportamos ambas funciones
module.exports = { factorial, fibonacci };