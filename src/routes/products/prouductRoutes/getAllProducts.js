const { responseSuccess, responseFailed } = require('../../../services/responseBody')
const fs = require('fs');
const util = require('util');

const productroute = (req, res) => {
  const readFile = util.promisify(fs.readFile);
  readFile('./src/db/products.json')
    .then(db => responseSuccess(JSON.parse(db), res))
    .catch((err) => responseFailed(JSON.parse(err), res))
};

module.exports = productroute;
