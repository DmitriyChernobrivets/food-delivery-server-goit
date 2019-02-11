const DB = require('../services/dateBase');
const { responseSuccess, responseFailed } = require('../services/responseBody')
const db = new DB();

const getByID = (req, res) => {
    const { id } = req.params;

    db.getItemByID(id)
        .then(product => responseSuccess(product, res))
        .catch(err => responseFailed([], res))

    
}
module.exports = getByID;