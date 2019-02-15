const { responseSuccess, responseFailed } = require('../../../services/responseBody')
const Products = require("../../../mongoDB/models/Products");

const productroute = (req, res) => {
  Products.find().limit(10)
    .then(el => responseSuccess(el, "Product", res))
    .catch(err => responseFailed(400, err.message, res));
};

module.exports = productroute;
