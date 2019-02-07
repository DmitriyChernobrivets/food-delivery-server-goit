const uuidv4 = require("uuid/v4");
const fs = require("fs");
const path = require("path");

const categoriesRoute = (req, res) => {
  const id = uuidv4();
  const category = JSON.parse(req.body.key); // {}
  const directoryPath = path.join(__dirname, "../db/", "categories/");

  const addingIdCategory = {
    id,
    ...category
  };
  fs.writeFile(
    directoryPath + `category-${addingIdCategory.name}.json`,
    JSON.stringify(addingIdCategory)
  );
  res.end();
};

module.exports = categoriesRoute;
