const { responseSuccess, responseFailed } = require('../../../services/responseBody');
const User = require('../../../mongoDB/models/Users');


const createUser = (req, res) => {
    const user = req.body;

    User.create(user)
        .then(el => responseSuccess(el, "User", res))
        .catch(err => responseFailed(400, err.message, res));

}

module.exports = createUser;