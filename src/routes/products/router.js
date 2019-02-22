const express = require("express");
const productRouter = express.Router();
const getAllProducts = require("./prouductRoutes/getProducts");
const getProductsById = require("./prouductRoutes/getProductByID");
const postProducts = require('./prouductRoutes/postProducts');
const updateProduct = require('./prouductRoutes/updateProduct');


productRouter
    .get('/', getProducts)
    .get('/:id', getProductsById)
    .post('/', postProducts)
    .put('/:id', updateProduct);


module.exports = productRouter;