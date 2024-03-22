const productsSchema = require('../models/products');
const { getUserById } = require('./usersController');


// obtener todos los productos que esten en el stock 
const getProducts = async (req, res) => {
    try {
        const productos = await productsSchema.find({ inStock: true });
        res.status(200).json({'products': productos});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// obtener el precio especial que puede tener un usuario
const getSpecialPrices = async (req, res) => {
    const { user_id ,name_product } = req.params;
    try {
        const product = await productsSchema.findOne({ name : name_product });
        const userSpecialPrice = await getUserById(user_id, product.brand);
        price = userSpecialPrice ? product.specialPrices : product.basePrice;
        res.status(200).json({'price': price});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


// exportacion de los metodos
module.exports = {
    getProducts,
    getSpecialPrices
};