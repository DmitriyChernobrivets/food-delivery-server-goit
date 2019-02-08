const writeFileToDb = require("../helpers/writeInDb");
const responseBody = require("../helpers/responseBody");
const postProductRoute = (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const writedData = writeFileToDb(req);
  const response = responseBody("success", "product", writedData);

  res.writeHead(201, { "Content-Type": "application/json" });
  res.write(JSON.stringify(response));
  res.send();
};

module.exports = postProductRoute;
