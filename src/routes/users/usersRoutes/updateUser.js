const { responseSuccess, responseFailed } = require('../../../services/responseBody');
const User = require('../../../mongoDB/models/Users');


const updateUser = (req, res) => {
    const { id } = req.params;
    const body = req.body;

    User.findOneAndUpdate(id, { $set: { ...body, updated: Date.now() } }, { new: true })
        .then(el => responseSuccess(el, "User", res))
        .catch(err => responseFailed(404, err.message, res))

}

module.exports = updateUser;