const writeFileToDb = require("../helpers/writeInDb");
const responseBody = require("../helpers/responseBody");
const users = (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const writedData = writeFileToDb(req);
  const response = responseBody("success", "user", writedData);

  res.writeHead(201, { "Content-Type": "application/json" });
  res.write(JSON.stringify(response));
  res.end();
};

module.exports = users;
