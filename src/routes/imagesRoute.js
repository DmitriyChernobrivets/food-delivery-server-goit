const fs = require("fs");
const responseBody = require("../helpers/responseBody");
const imagesRoute = (req, res) => {
  if (req.files) {
    const resultSrc = req.files.reduce((acc, file) => {
      const { originalname } = file;
      const desimationPath = "./src/db/images/" + originalname;

      fs.rename(file.path, desimationPath, function(err) {
        if (err) throw err;
      });

      return acc.concat(desimationPath);
    }, []);
    let response = responseBody("success", "imgsrr", resultSrc);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.write(JSON.stringify(response));
    res.end();
  }
};
module.exports = imagesRoute;
