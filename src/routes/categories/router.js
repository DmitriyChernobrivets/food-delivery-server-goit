const express = require("express");
const categoriesRouter = express.Router();
const getCategoryById = require('./categoryRoutes/getCategoryByID');
const postCategory = require('./categoryRoutes/postCategory');
const updateCategory = require('./categoryRoutes/updateCategory');

categoriesRouter
    .get('/:id', getCategoryById)
    .post('/', postCategory)
    .put('/:id', updateCategory);

// productRouter.post('/', postProduct);

module.exports = categoriesRouter;