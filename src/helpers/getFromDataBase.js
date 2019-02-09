const path = require("path");
const getFromDataBase = (id, req) => {
  const idFromRout = req.url.replace(/^\/\w+\//, "");
  const routName = req.url.match(/^\/\w+\//)[0].replace(/\//g, "");
  const itemsPath = path.join(
    __dirname,
    "../db/",
    routName,
    `/${routName}.json`
  );
  const dB = require(itemsPath);

  return dB[routName].find(item => item.id === id);
};
module.exports = getFromDataBase;
