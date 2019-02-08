const fs = require("fs");
const path = require("path");
const dbDirectory = path.join(__dirname, "../db/users/");

const register = (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const user = JSON.parse(req.body.user); // {}
  const { username } = user;
  const dbFileDirectory = dbDirectory + username;
  const responseBody = {
    status: "success",
    user
  };

  fs.writeFile(`${dbFileDirectory}.json`, JSON.stringify(user));
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(`<h1>${JSON.stringify(responseBody)}</h1>`);
  res.end();
};

module.exports = register;
