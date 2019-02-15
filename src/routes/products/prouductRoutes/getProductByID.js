const { responseSuccess, responseFailed } = require('../../../services/responseBody');
const Products = require("../../../mongoDB/models/Products");


const getByID = (req, res) => {
    const { id } = req.params;
    Products.findById(id)
        .then(el => responseSuccess(el, "Product", res))
        .catch(err => responseFailed(400, err.message, res));
}
module.exports = getByID;