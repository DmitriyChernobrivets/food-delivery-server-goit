const uuidv4 = require("uuid/v4");
const fs = require("fs");
const path = require("path");
const util = require("util");
const { responseSuccess, responseFailed } = require("../../../services/responseBody");
const dbPath = path.join(__dirname, '../../../', './db/products', 'products.json');

const postProducts = async (req, res) => {
  const product = req.body;
  const newProduct = { id: uuidv4(), ...product };
  const readFile = util.promisify(fs.readFile);
  const writeFile = util.promisify(fs.writeFile);

  try {
    const read = await readFile(dbPath, "utf-8");
    const newItem = JSON.parse(read).concat(newProduct);

    await writeFile(dbPath, JSON.stringify(newItem), "utf-8");
    responseSuccess(newProduct, res);
  } catch (err) {
    console.log("error", err);
    responseFailed("FAILED", res);
  }
};

module.exports = postProducts;
