const { responseSuccess, responseFailed } = require('../../../services/responseBody')
const fs = require('fs');
const path = require('path');
const util = require('util');
const dbPath = path.join(__dirname, '../../../', './db/products', 'products.json');
const { getItemsByIDS, getItemsByCATEGORY } = require('../../../services/functions');

const productroute = (req, res) => {

  const { ids, category } = req.query;
  const readFile = util.promisify(fs.readFile);

  switch (true) {
    case !!ids:
      readFile(dbPath)
        .then(products => getItemsByIDS(ids, JSON.parse(products)))
        .then(result => responseSuccess(result, res))
        .catch(err => responseFailed(err, res));

      break;
    case !!category:
      readFile(dbPath)
        .then(categories => getItemsByCATEGORY(category, JSON.parse(categories)))
        .then(result => responseSuccess(result, res))
        .catch(err => responseFailed(JSON.parse(err), res));

      break;
    default:
      readFile(dbPath)
        .then(db => responseSuccess(JSON.parse(db), res))
        .catch((err) => responseFailed(JSON.parse(err), res))
  }

};

module.exports = productroute;
