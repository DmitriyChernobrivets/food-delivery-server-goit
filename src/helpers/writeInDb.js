const uuidv4 = require("uuid/v4");
const fs = require("fs");
const path = require("path");

const writeFileToDb = req => {
  const id = uuidv4();
  const parsedData = JSON.parse(req.body.key); // {}
  console.log(parsedData);
  const indexedData = {
    id,
    ...parsedData
  };

  const directoryPath = path.join(
    __dirname,
    "../db/",
    req.url,
    `${req.url}-${indexedData.name || indexedData.username}.json`
  );

  fs.writeFile(directoryPath, JSON.stringify(indexedData), function(err) {
    if (err) throw new Error("writing Error in db", err);
  });
  return parsedData;
};
module.exports = writeFileToDb;
