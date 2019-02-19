const uuidv4 = require("uuid/v4");
const fs = require("fs");
const path = require("path");
const util = require("util");
const { responseSuccess, responseFailed } = require("../../../services/responseBody");
const dbPath = path.join(__dirname, '../../../', './db/products', 'products.json');
const userDbpath = path.join(__dirname, '../../../', './db/users/');
const { findProducts } = require('../../../services/functions');

const postCategory = async (req, res) => {
    const order = req.body;
    const orderId = uuidv4();
    const { user: userId, products } = order;
    const orderPath = path.join(userDbpath, userId, '/orders');
    const orderPathFile = path.join(orderPath, `/${orderId}.json`);
    const readFile = util.promisify(fs.readFile);
    const createFolder = util.promisify(fs.mkdir);
    const writeFile = util.promisify(fs.writeFile);

    try {
        const isProductsinBase = await readFile(dbPath).then(el => findProducts(JSON.parse(el), products).length === products.length);

        if (isProductsinBase) {
            let modifiedOrder = { orderId, ...order };
            if (!fs.existsSync(orderPath)) {

                await createFolder(orderPath);
                await writeFile(orderPathFile, JSON.stringify(modifiedOrder))
                    .then(() => responseSuccess(modifiedOrder, res));
            } else
                await writeFile(orderPathFile, JSON.stringify(modifiedOrder))
                    .then(() => responseSuccess(modifiedOrder, res));
        } else
            responseFailed('Products not founded', res)
    } catch (err) {
        console.log(err);
        responseFailed('Something goes Wrong', res)
    }
};

module.exports = postCategory;
