const mongoose = require("mongoose");


// modelo de los productos
const productsSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  inStock: {
    type: Boolean,
    require: true,
  },
  basePrice: {
    type: Number,
    require: true,
  },
  specialPrices: {
    type: Number,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
});


// exportacion del modelo de producos
module.exports = mongoose.model("product", productsSchema);
