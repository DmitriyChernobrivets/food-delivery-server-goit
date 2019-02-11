const express = require("express");
const fs = require('fs');
const productRoute = require("../routes/productsRoute");
const defaultRote = require("../routes/defaultRoute");
const usersRoute = require("../routes/usersRoute");
const getByID = require("../routes/getProductByID");
const queryRoute = require('../routes/querysRoute');
const bodyParser = require("body-parser");
var https = require('https');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const options = require('../ssl2/options');
const app = express();


const server = port => {

  https.createServer(options, app).listen(443);

  app
    .use(urlencodedParser)
    .use(bodyParser.json())
    .get("/", defaultRote)
    .get("/products/:id", getByID)
    .get('/products/*+', queryRoute)
    .get("/products", productRoute)
    .post("/register", usersRoute)
    .listen(port);
};

module.exports = server;
