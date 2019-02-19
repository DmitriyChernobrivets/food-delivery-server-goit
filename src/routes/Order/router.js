const express = require("express");
const orderRouter = express.Router();

const postOrder = require('./orderRoute/postOrder');


orderRouter
    .post('/', postOrder)

module.exports = orderRouter;