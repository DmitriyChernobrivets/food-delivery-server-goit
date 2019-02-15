const { responseSuccess, responseFailed } = require('../../../services/responseBody')
const fs = require('fs');
const util = require('util');
const { getItemsByIDS, getItemsByCATEGORY } = require('../../../services/functions');
var url = require('url');
var url_parts = url.parse(request.url, true);
const queryRoute = (req, res) => {
    const { ids, category } = req.query;
    console.log(req.params)
    res.send();
    // const readFile = util.promisify(fs.readFile);

    // switch(true) {
    //     case !!ids:
    //         readFile('./src/db/products.json')
    //             .then(products => getItemsByIDS(ids, JSON.parse(products)))
    //             .then(result => responseSuccess(result, res))
    //             .catch(err => responseFailed(err, res));

    //         break;    
    //     case !!category: 
    //         readFile('./src/db/products.json')
    //             .then(categories => getItemsByCATEGORY(category, JSON.parse(categories)))
    //             .then(result => responseSuccess(result, res))
    //             .catch(err => responseFailed(JSON.parse(err), res));

    //         break;
    //     default:
    //         responseFailed("ERROR", res)    
    // }


}
module.exports = queryRoute;