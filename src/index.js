require('dotenv').config();
const express = require('express');
const connectDB = require('./config/database');
const productsRoutes = require('./routes/products');


// swagger
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger');


// configuracion
const app = express();
const port = process.env.PORT;


// middelwares
app.use(express.json());
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/api', productsRoutes);


//routes
app.get('/', (req, res) => {
    res.redirect('/api-docs');
})


// Conectar a la base de datos
connectDB();


app.listen(port, () => console.log(`el servidor esta corriendo en el puerto ${port}`));