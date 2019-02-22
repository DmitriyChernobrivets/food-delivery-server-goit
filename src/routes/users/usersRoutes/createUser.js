const { responseSuccess, responseFailed } = require("../../../services/responseBody");
const User = require("../../../mongoDB/models/Users");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  const user = req.body;
  if (!user.password || !user.username || !user.email) {
    res.send({ status: "Failed", error: "Bad Request" });
  }
  const hashedPassword = bcrypt.hashSync(user.password, bcrypt.genSaltSync(8), null);
  const newUser = new User({ ...user, password: hashedPassword });

  newUser
    .save()
    .then(({ username, password, id }) =>
      res.send({ status: "OK", newUser: { username, password, id } })
    )
    .catch(err => res.send({ status: "Failed", error: err.message }));
};

module.exports = createUser;
