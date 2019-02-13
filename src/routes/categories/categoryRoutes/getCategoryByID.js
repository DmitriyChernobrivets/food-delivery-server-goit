const { responseSuccess, responseFailed } = require('../../../services/responseBody');
const fs = require('fs');
const util = require('util');
const path = require("path");
const { getById } = require('../../../services/functions');
const dbPath = path.join(__dirname, '../../../', './db/categories', 'categories.json');


const getCategoryByID = (req, res) => {
    const { id } = req.params;
    const readFile = util.promisify(fs.readFile);

    readFile(dbPath)
        .then(categories => getById(id, JSON.parse(categories)))
        .then(category => category
            ? responseSuccess(category, res)
            : responseFailed('NOT FOUNDED', res))
        .catch(err => responseFailed(JSON.parse(err), res))
}

module.exports = getCategoryByID;
