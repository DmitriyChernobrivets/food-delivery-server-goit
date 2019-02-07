const allproducts = require("../db/products.json");

const productroute = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(allproducts));
  res.end();
};

module.exports = productroute;
