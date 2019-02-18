const { responseSuccess, responseFailed } = require('../../../services/responseBody')
const Products = require("../../../mongoDB/models/Products");
const mongoose = require('mongoose');

const productroute = (req, res) => {
  const { ids } = req.query;
  switch (true) {

    case !!ids:

      const trimedIDS = ids.match(/\w+/g);
      Products.find({ "_id": { $in: trimedIDS } })
        .then(el => responseSuccess(el, "Product", res))
        .catch(err => responseFailed(400, err.message, res))
      break;
    default:
      Products.find().limit(10)
        .then(el => responseSuccess(el, "Product", res))
        .catch(err => responseFailed(400, err.message, res));
      break;
  }



};

module.exports = productroute;
