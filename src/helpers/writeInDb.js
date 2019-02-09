const uuidv4 = require("uuid/v4");
const fs = require("fs");
const path = require("path");

const writeFileToDb = req => {
  const id = uuidv4();
  const dbKey = req.url.slice(1);
  const productsPath = path.join(
    __dirname,
    "../db/",
    req.url,
    `${req.url}.json`
  );
  const allproducts = require(productsPath);
  const parsedData = JSON.parse(req.body[dbKey]);
  const indexedData = { id, ...parsedData };

  allproducts[dbKey].push(indexedData);

  fs.writeFile(productsPath, JSON.stringify(allproducts), function(err) {
    if (err) throw new Error("writing Error in db", err);
  });
  return parsedData;
};
module.exports = writeFileToDb;
