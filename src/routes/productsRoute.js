const DB = require('../services/dateBase');
const { responseSuccess, responseFailed } = require('../services/responseBody')
const db = new DB();


const productroute = (req, res) => {
  db.readDb()
  .then(db => responseSuccess(db, res))
  .catch((err) => responseFailed(err, res))
  

};

module.exports = productroute;
