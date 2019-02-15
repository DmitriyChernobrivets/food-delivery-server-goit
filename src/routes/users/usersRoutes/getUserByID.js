const fs = require('fs');
const path = require("path");
const util = require('util');
const { responseSuccess, responseFailed } = require('../../../services/responseBody');
const dbPath = path.join(__dirname, '../../../', './db/users', '/');

const getUserByID = async (req, res) => {
    const { id } = req.params;
    const validateUser = path.join(dbPath, id);

    const readFile = util.promisify(fs.readFile);
    const stats = util.promisify(fs.stat);

    try {
        const userFolder = await stats(validateUser);
        if (userFolder.isDirectory() !== true) return responseFailed('failed', res);
        const user = await readFile(validateUser + `/user-${id}.json`);
        responseSuccess(JSON.parse(user), res);
    }
    catch (err) {
        console.log(err);
        responseFailed('failed', res)
    }
}
module.exports = getUserByID;