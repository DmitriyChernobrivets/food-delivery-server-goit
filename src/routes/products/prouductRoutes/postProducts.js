const uuidv4 = require('uuid/v4');
const { responseSuccess, responseFailed } = require('../../../services/responseBody');
const fs = require('fs');
const util = require('util');

const postProducts = async(req, res) => {
    const product = req.body;
    const newProduct = { id: uuidv4(), ...product };
    const readFile = util.promisify(fs.readFile);
    const writeFile = util.promisify(fs.writeFile);   

    try {
    
        const read = await readFile('./src/db/products.json', 'utf-8');
        const newS = JSON.parse(read).concat(newProduct);
                     await writeFile('./src/db/products.json', JSON.stringify(newS), 'utf-8')
                                .then(() => responseSuccess(newProduct, res));   
    
        }
    catch(err) {
        console.log('error', err);
        responseFailed("FAILED", res)
}

        // try {
        //     readFile('./src/db/products.json')
        //         .then(products => JSON.parse(products).concat(newProduct))
        //          .then(product => {
        //                 return writeFile('./src/db/products.json', JSON.stringify(product), 'utf8')
        //                     .then((data) => console.log(data) || responseSuccess("asda", res))
        //                     .catch(err => responseFailed("FAILED", res))
        // })
        //         .catch(err => responseFailed("FAILED", res))  
        // }  
        // catch(err) {
        //     console.log('ERROR')
        // }
}

module.exports = postProducts;