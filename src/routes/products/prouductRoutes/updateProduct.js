const { responseSuccess, responseFailed } = require('../../../services/responseBody');
const Products = require("../../../mongoDB/models/Products");


const updateProduct = (req, res) => {
    const { id } = req.params;

    const body = req.body;
    Products.findByIdAndUpdate(id, { ...body })
        .then(el => responseSuccess(el, "Product", res))
        .catch(err => responseFailed(400, err.message, res));
}

module.exports = updateProduct;