const express = require("express");
const bodyParser = require("body-parser");
const options = require('../ssl/options');
const https = require('https');
const productRouter = require("../routes/products/router");
const userRouter = require("../routes/users/router");
const orderRouter = require("../routes/Order/router");
const imageRouter = require('../routes/images/router');
const errorHandler = require('../middleware/bodyValidation');
const morgan = require('morgan');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const app = express();


const server = port => {

  app
    .use(urlencodedParser)
    .use(bodyParser.json())
    .use(morgan('dev'))
    .use('/products', productRouter)
    .use('/users', userRouter)
    .use('/orders', orderRouter)
    .use('/images', imageRouter)
    .use(errorHandler)
    .listen(port);

  https.createServer(options, app).listen(443);

};

module.exports = server;
