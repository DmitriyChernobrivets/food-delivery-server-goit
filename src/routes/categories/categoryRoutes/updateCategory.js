const fs = require('fs');
const path = require("path");
const util = require('util');
const { responseSuccess, responseFailed } = require('../../../services/responseBody');
const dbPath = path.join(__dirname, '../../../', './db/categories', 'categories.json');
const { getById } = require('../../../services/functions');

const updateCategory = (req, res) => {
    const { id } = req.params;

    const body = req.body;
    const readFile = util.promisify(fs.readFile);
    const writeFile = util.promisify(fs.writeFile);

    readFile(dbPath)
        .then(categories => {

            const allCategories = JSON.parse(categories);

            const findProduct = getById(id, allCategories);

            if (!findProduct) return responseFailed("failed", res);
            const newCategory = { ...findProduct, ...body };

            const updatedBase = allCategories.map(el => String(el.id) === id ? { ...newCategory } : el);
            console.log(updatedBase);
            writeFile(dbPath, JSON.stringify(updatedBase))
                .then(() => responseSuccess(newCategory, res));

        })
        .catch((err) => console.log(err) || responseFailed("failed", res))
}

module.exports = updateCategory;
