const express = require("express");
const productRouter = express.Router();
const multipartRout = require('./imagesRoutes/multipartRoute');



productRouter
    .post('/', multipartRout());


module.exports = productRouter;