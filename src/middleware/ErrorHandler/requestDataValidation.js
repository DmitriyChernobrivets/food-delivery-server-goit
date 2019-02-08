const validationRouter = require("./validationRouter");

const requestDataValidation = (req, res, next) => {
  if (!req.body.key) return res.end();
  const validKeys = validationRouter[req.path];

  const key = JSON.parse(req.body.key);
  const keys = Object.keys(key);

  const missingKeys = validKeys.filter(key => !keys.includes(key));
  const errorResponse = {
    status: "error",
    error: `${missingKeys.join(", ")} missing`
  };
  if (missingKeys.length > 0) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.write(`<h1>${JSON.stringify(errorResponse)}</h1>`);
    res.end();
  } else next();
};

module.exports = requestDataValidation;
