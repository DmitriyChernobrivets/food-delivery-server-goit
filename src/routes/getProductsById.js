const getfromDataBase = require("../helpers/getFromDataBase");
const responseBody = require("../helpers/responseBody");

const getProductsById = (req, res) => {
  const { id } = req.params;
  const result = getfromDataBase(id, req);
  const response = result
    ? responseBody("success", "item", result)
    : responseBody("failed", "error", "MISSING");
  res.writeHead(201, { "Content-Type": "application/json" });
  res.write(JSON.stringify(response));
  res.end();
};
module.exports = getProductsById;
