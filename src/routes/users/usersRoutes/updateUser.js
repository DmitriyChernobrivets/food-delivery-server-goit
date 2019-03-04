const { responseSuccess, responseFailed } = require("../../../services/responseBody");
const User = require("../../../mongoDB/models/Users");

const updateUser = (req, res) => {
  const { id } = req.params;
  const body = req.body;

  User.findOneAndUpdate(id, { $set: { ...body, updated: Date.now() } }, { new: true })
    .then(
      ({ id, username }) =>
        console.log(id) || res.send({ status: "Updated", User: { username, id } })
    )
    .catch(err => res.send({ status: "Failed", error: err.message }));
};

module.exports = updateUser;
