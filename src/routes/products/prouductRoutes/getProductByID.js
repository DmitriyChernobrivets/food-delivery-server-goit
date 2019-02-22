const Products = require("../../../mongoDB/models/Products");

const getByID = (req, res) => {
  const { id } = req.params;
  Products.findById(id)
    .then(product => res.send({ status: "OK", product }))
    .catch(err => res.send({ status: "Failed", Error: "Not Founded" }));
};
module.exports = getByID;
