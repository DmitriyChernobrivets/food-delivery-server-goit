const fs = require("fs");
const path = require("path");
const errorHandler = require("../Errors/errorHanlder");

const register = (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const user = req.body; // {}
  const { username } = user;

  const dbFileDirectory = path.join(
    __dirname,
    "../db/users/",
    `${username}.json`
  );

  const responseBody = {
    status: "success",
    user
  };

  fs.writeFile(dbFileDirectory, JSON.stringify(user), errorHandler);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(`<h1>${JSON.stringify(responseBody)}</h1>`);
  res.end();
};

module.exports = register;
