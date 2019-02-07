const errorRouter = require("./errorRote");

const errorHandler = (req, res, next) => {
  const checkingKeys = errorRouter[req.path];

  const user = JSON.parse(req.body.user);
  const keys = Object.keys(user);
  const missingKeys = checkingKeys.filter(key => !keys.includes(key));

  if (missingKeys.length > 0) {
    res.writeHead(400, { "Content-Type": "text/html" });
    res.write(
      `<h1>${new Error("MISSING KEYS:  " + missingKeys.join(", "))} </h1>`
    );
    res.end();
  } else next();
};

module.exports = errorHandler;
