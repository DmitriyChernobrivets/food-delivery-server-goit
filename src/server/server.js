const express = require("express");
const bodyParser = require("body-parser");
// const options = require('../ssl/options');
// const path = require("path");
// const https = require('https');
const productRouter = require("../routes/products/router");
const userRouter = require("../routes/users/router");
const categoriesRouter = require("../routes/categories/router");
const imageRouter = require('../routes/images/router');
const errorHandler = require('../middleware/bodyValidation');
const morgan = require('morgan');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const app = express();
const mongoose = require('mongoose');
const { mongoURI } = require('../mongoDB/keys');


const server = port => {

  mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log('Mongo connected'))
    .catch(err => console.log('Error with Mongo', err));

  app
    .use(urlencodedParser)
    .use(bodyParser.json())
    .use(morgan('dev'))
    .use(express.static('./src/public'))
    .use('/products', productRouter)
    .use('/users', userRouter)
    .use('/categories', categoriesRouter)
    .use('/images', imageRouter)
    .use(errorHandler)
    .listen(port, () => console.log("listening port 3003"));

  // https.createServer(options, app).listen(443, () => console.log("listening port 443"));

};

module.exports = server;
