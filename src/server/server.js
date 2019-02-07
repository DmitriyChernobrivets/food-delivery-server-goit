const express = require("express");
const productRoute = require("../routes/productsRoute");
const defaultRote = require("../routes/defaultRoute");
const usersRoute = require("../routes/usersRoute");
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: true });

const app = express();

const server = port => {
  app.get("/", defaultRote);
  app.get("/products", productRoute);
  app.post("/register", urlencodedParser, usersRoute);
  app.listen(port);
};

module.exports = server;
