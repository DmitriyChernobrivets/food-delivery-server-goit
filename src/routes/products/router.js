const express                 =         require("express");
const productRouter           =         express.Router();
const getAllProducts          =         require("./prouductRoutes/getAllProducts");
const getProductsById         =         require("./prouductRoutes/getProductByID");
const getProductByQueryString =         require('./prouductRoutes/querysRoute');
const postProduct             =         require('./prouductRoutes/postProducts');

productRouter.get('/', getAllProducts);

productRouter.get('/:id', getProductsById);

productRouter.get('/*+', getProductByQueryString)
             .post('/', postProduct);

// productRouter.post('/', postProduct);

module.exports = productRouter;