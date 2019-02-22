const User = require("../../../mongoDB/models/Users");
const { responseSuccess, responseFailed } = require("../../../services/responseBody");

const getUserByID = (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.send({ status: "Failed", error: "Wrong incoming data" });
  }

  User.findById(id)
    .then(({ username, id }) => res.send({ status: "OK", User: { username, id } }))
    .catch(err => res.send({ status: "Failed", error: err.message }) || console.log(err.message));
};
module.exports = getUserByID;
