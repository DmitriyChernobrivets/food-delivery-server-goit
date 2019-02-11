const fs = require('fs');

const privateKey  = fs.readFileSync('./src/ssl/server.key');
const certificate = fs.readFileSync('./src/ssl/server.crt');

const options = {
   key: privateKey,
   cert: certificate
};
module.exports = options;