const express = require("express");
const getProductRoute = require("../routes/getProductsRoute");
const postProductRoute = require("../routes/postProductRoute");
const defaultRote = require("../routes/defaultRoute");
const usersRoute = require("../routes/usersRoute");
const categoriesRoute = require("../routes/categoriesRoute");
const bodyParser = require("body-parser");
const errorHandler = require("../middleware/ErrorHandler/handleError");

const urlencodedParser = bodyParser.urlencoded({ extended: true });

const app = express();

const server = port => {
  app.use(urlencodedParser).use(errorHandler);

  app
    .get("/", defaultRote)
    .get("/products", getProductRoute)
    .post("/products", postProductRoute)
    .post("/users", usersRoute)
    .post("/categories", categoriesRoute);

  app.listen(port);
};

module.exports = server;
