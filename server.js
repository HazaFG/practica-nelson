const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Ruta para calcular impuestos
app.post('/calcular-impuesto', (req, res) => {
    const { ingreso } = req.body;

    if (ingreso === undefined) {
        return res.status(400).json({ error: 'Se requiere un ingreso válido' });
    }

    const impuesto = ingreso * 0.16; // Ejemplo: Impuesto del 16%
    res.json({ impuesto });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
