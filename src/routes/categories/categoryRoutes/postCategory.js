const uuidv4 = require("uuid/v4");
const fs = require("fs");
const path = require("path");
const util = require("util");
const { responseSuccess, responseFailed } = require("../../../services/responseBody");
const dbPath = path.join(__dirname, '../../../', './db/categories', 'categories.json');

const postCategory = async (req, res) => {
    const category = req.body;
    const newCategory = { id: uuidv4(), ...category };
    console.log(newCategory)
    const readFile = util.promisify(fs.readFile);
    const writeFile = util.promisify(fs.writeFile);

    try {
        const read = await readFile(dbPath, "utf-8");
        const newItem = JSON.parse(read).concat(newCategory);

        await writeFile(dbPath, JSON.stringify(newItem), "utf-8");
        responseSuccess(newCategory, res);
    } catch (err) {
        console.log("error", err);
        responseFailed("FAILED", res);
    }
};

module.exports = postCategory;
