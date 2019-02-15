const fs = require('fs');
const path = require("path");
const util = require('util');
const { responseSuccess, responseFailed } = require('../../../services/responseBody');
const dbPath = path.join(__dirname, '../../../', './db/products', 'products.json');
const { getById } = require('../../../services/functions');

const updateProduct = (req, res) => {
    const { id } = req.params;

    const body = req.body;
    const readFile = util.promisify(fs.readFile);
    const writeFile = util.promisify(fs.writeFile);

    readFile(dbPath)
        .then(products => {

            const allProducts = JSON.parse(products);

            const findProduct = getById(id, allProducts);

            if (!findProduct) return responseFailed("failed", res);
            const newProduct = { ...findProduct, ...body };

            const updatedBase = allProducts.map(el => String(el.id) === id ? { ...newProduct } : el);
            console.log(updatedBase);
            writeFile(dbPath, JSON.stringify(updatedBase))
                .then(() => responseSuccess(newProduct, res));

        })
        .catch((err) => console.log(err) || responseFailed("failed", res))
}

module.exports = updateProduct;