const mongoose = require('mongoose');

const name = 'drenvio';
const password = 'moM5f3AodwLE5d0A';
const database = 'ChallengeBackNicolasRios';

// URL de conexión a la base de datos MongoDB
const url = `mongodb://${name}:${password}@ac-aemgtkt-shard-00-00.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-01.unqyghm.mongodb.net:27017,ac-aemgtkt-shard-00-02.unqyghm.mongodb.net:27017/${database}?replicaSet=atlas-y8oxsk-shard-0&ssl=true&authSource=admin`;


// conexion a la base de datos 
const connectDB = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conexión a MongoDB establecida');
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error);
        process.exit(1); // Salir del proceso Node.js con un código de error
    }
};


// exportacion de conexion
module.exports = connectDB;