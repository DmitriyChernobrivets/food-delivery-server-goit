const { responseSuccess, responseFailed } = require('../../../services/responseBody');
const fs = require('fs');
const util = require('util');
const path = require("path");
const { getById } = require('../../../services/functions');
const dbPath = path.join(__dirname, '../../../', './db/products', 'products.json');

const getByID = (req, res) => {
    const { id } = req.params;
    const readFile = util.promisify(fs.readFile);
    readFile(dbPath)
        .then(products =>
            getById(id, JSON.parse(products)))
        .then(product => product
            ? responseSuccess(product, res)
            : responseFailed('NOT FOUNDED', res))
        .catch(err => responseFailed(JSON.parse(err), res))
}
module.exports = getByID;