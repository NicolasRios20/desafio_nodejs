const usersSchema = require('../models/users')


// Función para verificar si un cliente tiene descuento para una marca específica
const getUserById = async (user_id, brand) => {
    specialPrice = false;
    const user = await usersSchema.findOne({ _id: user_id});
    const userBrand = user.special_price
    for (let i = 0; i < userBrand.length; i++) {
        if (userBrand[0] === brand) {
            specialPrice = true
        }
    }
    return specialPrice;
};


// exportacion de metodos
module.exports = {
    getUserById
};

