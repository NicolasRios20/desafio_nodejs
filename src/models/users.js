const mongoose = require('mongoose');


// modelo de los usuarios
const usersSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    special_price: {
        type: Array,
        require: false
    },
})


// exportacion del modelo de los usuarios
module.exports = mongoose.model('User', usersSchema)