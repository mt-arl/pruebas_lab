// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola mundo! Servidor con CI/CD configurado.');
});

// Solo iniciamos el servidor si no estamos en modo de prueba
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
}

module.exports = app;