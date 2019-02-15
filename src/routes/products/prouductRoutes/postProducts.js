const { responseSuccess, responseFailed } = require("../../../services/responseBody");
const Products = require("../../../mongoDB/models/Products");


const postProducts = (req, res) => {
  const product = req.body;
  Products.create(product)
    .then(el => responseSuccess(el, "Product", res))
    .catch(err => responseFailed(400, err.message, res));

};

module.exports = postProducts;
