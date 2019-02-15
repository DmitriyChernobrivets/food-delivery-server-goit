const express = require("express");
const productRouter = express.Router();
const getProducts = require("./prouductRoutes/getProducts");
const getProductsById = require("./prouductRoutes/getProductByID");
const postProduct = require('./prouductRoutes/postProducts');
const updateProduct = require('./prouductRoutes/updateProduct');

productRouter
    .get('/', getProducts)
    .get('/:id', getProductsById)
    .post('/', postProduct)
    .put('/:id', updateProduct);


module.exports = productRouter;