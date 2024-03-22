const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Nicolas Rios Castillo ',
            version: '1.0',
            description: 'Api realizada con Node, Express, MongoDB'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            },
            {
                url: 'https://desafio-nodejs-02da.onrender.com'
            }
        ]
    },
    // Ruta relativa al archivo de configuración Swagger
    apis: [path.join(__dirname, '../routes/products.js')],
};

module.exports = swaggerJsdoc(options);
