const axios = require('axios');

const servidorIP = 'http://192.168.0.148:3000'; 

const calcularImpuesto = async (ingreso) => {
    try {
        const respuesta = await axios.post(`${servidorIP}/calcular-impuesto`, { ingreso });
        console.log(`Para un ingreso de ${ingreso}, el impuesto es: ${respuesta.data.impuesto}`);
    } catch (error) {
        console.error('Error al calcular el impuesto:', error.response ? error.response.data : error.message);
    }
};

calcularImpuesto(100); 
