const { responseSuccess, responseFailed } = require('../../../services/responseBody');
const User = require('../../../mongoDB/models/Users');


const updateUser = (req, res) => {

    const { id } = req.params;

    const body = req.body;
    console.log(id, body)
    User.findByIdAndUpdate(id,
        { ...body },
        { insereturnNewDocument: true, upsert: true })
        .then(el => responseSuccess(el, "User", res))
        .catch(err => responseFailed(404, err.message, res))

}

module.exports = updateUser;