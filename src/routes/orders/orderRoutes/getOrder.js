const Orders = require("../../../mongoDB/models/Orders");

const getOrder = (req, res) => {
  const { id } = req.params;
  Orders.findById(id)
    .then(order => res.send({ status: "OK", order }))
    .catch(err => res.send({ status: "Failed", Error: "Not Founded" }));
};

module.exports = getOrder;
