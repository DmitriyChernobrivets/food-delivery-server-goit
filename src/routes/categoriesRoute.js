const writeFileToDb = require("../helpers/writeInDb");
const responseBody = require("../helpers/responseBody");
const categoriesRoute = (req, res) => {
  if (!req.body) return res.sendStatus(400);
  const writedData = writeFileToDb(req);
  const response = writedData
    ? responseBody("success", "product", writedData)
    : responseBody("failed", "error", "Exists");
  res.writeHead(201, { "Content-Type": "application/json" });
  res.write(JSON.stringify(response));
  res.end();
};

module.exports = categoriesRoute;
