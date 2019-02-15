const port = require("./config.js");
const serverStart = require("./server/server");

const url = require('./mongoDB/keys');
const mongoose = require('mongoose');

mongoose.connect(url.mongoURI, { useNewUrlParser: true })
    .then(() => console.log('success connected'))
    .catch(err => console.log(err))
serverStart(port);
