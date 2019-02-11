const DB = require('../services/dateBase');
const { responseSuccess, responseFailed } = require('../services/responseBody')
const db = new DB();

const queryRoute = (req, res) => {
    const { ids, category } = req.query;

    switch(true) {
        case !!ids:
            db.getItemsByIDS(ids)
                .then(product => responseSuccess(product, res))
                .catch((err) => responseFailed(err, res));
            break;    
        case !!category: 
            db.getItemsByCATEGORY(category)
                .then(category => responseSuccess(category, res))
                .catch((err) => responseFailed(err, res));

            break;
        default:
        responseFailed("ERROR", res)    
    }

    
}
module.exports = queryRoute;