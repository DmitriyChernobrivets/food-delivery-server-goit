const express = require("express");
const getProductRoute = require("../routes/getAllProductsRoute");
const postProductRoute = require("../routes/postProductRoute");
const defaultRote = require("../routes/defaultRoute");
const usersRoute = require("../routes/usersRoute");
const getProductsById = require("../routes/getProductsById");
const imagesRoute = require("../routes/imagesRoute");
const usersGetRoute = require("../routes/usersGetRoute");
const categoriesRoute = require("../routes/categoriesRoute");
const bodyParser = require("body-parser");
const requestDataValidation = require("../middleware/ErrorHandler/requestDataValidation");
const multer = require("multer");
const upload = multer({ dest: "./src/db/images/" });
const urlencodedParser = bodyParser.urlencoded({ extended: true });

const app = express();

const server = port => {
  app.use(urlencodedParser).use(requestDataValidation);

  app
    .get("/", defaultRote)
    .get("/products", getProductRoute)
    .get("/products/:id", getProductsById)
    .post("/products", postProductRoute)
    .post("/users", usersRoute)
    .get("/users/:id", usersGetRoute)
    .post("/images", upload.any(), imagesRoute)
    .post("/categories", categoriesRoute);

  app.listen(port);
};

module.exports = server;
