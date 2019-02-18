const path = require('path');
const fs = require('fs');
const util = require('util');
const { responseSuccess } = require('./responseBody');
const getById = (id, array) =>
    array.find(product => String(product.id) === id);

const getItemsByIDS = (ids, AllProducts) =>
    AllProducts.filter(product => ids.includes(String(product.id)))

const getItemsByCATEGORY = (category, AllProducts) => {

    const arrayCATEGORYS = category.match(/\w+/g);
    return AllProducts.filter(product =>
        product.categories.find(category =>
            arrayCATEGORYS.includes(category)));
}

const moveImage = (obj, id) => {
    const rename = util.promisify(fs.rename);
    const pathUserFolder = path.join(`./src/db/users/${id}/`, obj.originalname);
    const root = path.join(__dirname + "../../../");
    const readFromPath = path.join(root, obj.path);
    return rename(readFromPath, pathUserFolder)

}

const findProducts = (Allproducts, searchedProducts) => Allproducts.filter(el => searchedProducts.includes(el.id))
module.exports = {
    getById,
    getItemsByIDS,
    getItemsByCATEGORY,
    moveImage,
    findProducts
};