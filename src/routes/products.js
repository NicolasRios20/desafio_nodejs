const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: nombre del producto
 *         inStock:
 *           type: boolean
 *           description: si el producto tiene existencia
 *         basePrice:
 *           type: integer
 *           description: precio base del producto
 *         specialPrices:
 *           type: integer
 *           description: precio de descuento o precio especial
 *         brand:
 *           type: string
 *           description: marca del producto
 *       required:
 *         - name
 *         - inStock
 *         - basePrice
 *         - specialPrices
 *         - brand
 *       example:
 *         name: Jordan One
 *         inStock: true
 *         basePrice: 90
 *         specialPrices: 70
 *         brand: Nike
 *     Price:
 *       type: object
 *       properties:
 *         price:
 *           type: integer
 *           description: valor del producto
 *       required:
 *         - price
 *       example:
 *         price: 60
*/


/**
 * @swagger
 * /api/products:
 *  get:
 *      summary: Retorna todos los productos que contienen stock
 *      tags: [Products]
 *      responses:
 *          200:
 *              description: Todos los productos que contienen stock
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/Product'
*/
router.get('/products', productsController.getProducts);


/**
 * @swagger
 * /api/price/{user_id}/{name_product}:
 *   get:
 *     summary: Retorna el precio especial o base de un producto
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del usuario
 *       - in: path
 *         name: name_product
 *         schema:
 *           type: string
 *         required: true
 *         description: Nombre del producto
 *     responses:
 *       200:
 *         description: Retorna el precio especial o base de un producto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Price'
*/
router.get('/price/:user_id/:name_product', productsController.getSpecialPrices);


// exportacion de las rutas
module.exports = router;