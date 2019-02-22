const fs = require('fs');

const privateKey = fs.readFileSync('./src/ssl/localhost.key');
const certificate = fs.readFileSync('./src/ssl/localhost.cert');

const options = {
   key: privateKey,
   cert: certificate,
   requestCert: false,
   rejectUnauthorized: false
};
module.exports = options;