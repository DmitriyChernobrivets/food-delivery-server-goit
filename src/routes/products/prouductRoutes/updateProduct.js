const { responseSuccess, responseFailed } = require("../../../services/responseBody");
const Products = require("../../../mongoDB/models/Products");

const updateProduct = (req, res) => {
  const { id } = req.params;
  const body = req.body;

  Products.findOneAndUpdate(id, { $set: { ...body } }, { new: true })
    .then(product => res.send({ status: "OK", product }))
    .catch(err => res.send({ status: "Failed", error: error.message }));
};

module.exports = updateProduct;
