const User = require("../mongoDB/models/Users");

const validateUser = (req, res, next) => {
  const { username, email } = req.body;
  User.findOne({ username, email })
    .then(el => (el ? res.send({ status: 400, error: "User already exists" }) : next()))
    .catch(err => res.send({ status: 500, error: err }));
};

module.exports = validateUser;
