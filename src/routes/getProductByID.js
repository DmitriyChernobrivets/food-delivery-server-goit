const { responseSuccess, responseFailed } = require('../services/responseBody')
const fs = require('fs');
const util = require('util');
const { getProductById } = require('../services/functions');

const getByID = (req, res) => {
    const { id } = req.params;
    const readFile = util.promisify(fs.readFile);
    readFile('./src/db/products.json')
        .then(products => 
            getProductById(id, JSON.parse(products)))
        .then(product => product 
                ? responseSuccess(product, res)
                : responseFailed([], res))
        .catch(err => responseFailed(JSON.parse(err), res))
}
module.exports = getByID;