const express = require("express");
const fs = require('fs');
// const productRoute = require("../routes/products/prouductRoutes/productsRoute");
// const defaultRote = require("../routes/defaultRoute");
// const usersRoute = require("../routes/usersRoute");
// const getByID = require("../routes/products/prouductRoutes/getProductByID");
// const queryRoute = require('../routes/querysRoute');
const bodyParser = require("body-parser");
const options = require('../ssl/options');
const https = require('https');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const productRouter = require("../routes/products/router");

const app = express();


const server = port => {

// apply the routes to our application
  app
    .use(urlencodedParser)
    .use(bodyParser.json())
    .use('/products', productRouter)
    .listen(port);
  // https.createServer(options, app).listen(443);

  // app
  //   .use(urlencodedParser)
  //   .use(bodyParser.json())
  //   .use((req, res, next) => console.log(req.url) || next())
  //   .get("/", defaultRote)
  //   .get("/products/:id", getByID)
  //   .get('/products/*+', queryRoute)
  //   .get("/products", productRoute)
  //   .post("/register", usersRoute)
  //   .listen(port);
};

module.exports = server;
