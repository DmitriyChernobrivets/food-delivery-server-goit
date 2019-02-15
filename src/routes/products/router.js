const express = require("express");
const productRouter = express.Router();
const getAllProducts = require("./prouductRoutes/getAllProducts");
const getProductsById = require("./prouductRoutes/getProductByID");
const getProductByQueryString = require('./prouductRoutes/querysRoute');
const postProduct = require('./prouductRoutes/postProducts');
const updateProduct = require('./prouductRoutes/updateProduct');

productRouter
    .get('/', getAllProducts)
    .get('/:id', getProductsById)
    .get('/*+', getProductByQueryString)
    .post('/', postProduct)
    .put('/:id', updateProduct);

// productRouter.post('/', postProduct);

module.exports = productRouter;