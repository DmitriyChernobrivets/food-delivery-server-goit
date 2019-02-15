const User = require('../../../mongoDB/models/Users');
const { responseSuccess, responseFailed } = require('../../../services/responseBody');


const getUserByID = (req, res) => {
    const { id } = req.params;

    User.findById(id)
        .then(el => responseSuccess(el, 'User', res))
        .catch(err => responseFailed(404, "User Not Founded", res) || console.log(err.message))

}
module.exports = getUserByID;