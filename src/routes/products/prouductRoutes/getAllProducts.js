const { responseSuccess, responseFailed } = require('../../../services/responseBody')
const fs = require('fs');
const path = require('path');
const util = require('util');
const dbPath = path.join(__dirname, '../../../', './db/products', 'products.json');

const productroute = (req, res) => {
  const readFile = util.promisify(fs.readFile);
  readFile(dbPath)
    .then(db => responseSuccess(JSON.parse(db), res))
    .catch((err) => responseFailed(JSON.parse(err), res))
};

module.exports = productroute;
