const Orders = require("../../../mongoDB/models/Orders");

const createOrder = (req, res) => {
  const order = req.body;
  const newOrder = new Orders(order);
  newOrder
    .save()
    .then(el => res.send({ status: "Created", Order: el }))
    .catch(err => res.send({ status: "Failed", Error: err.message }));
};

module.exports = createOrder;
