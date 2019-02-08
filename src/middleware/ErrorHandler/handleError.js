const errorRouter = require("./errorRote");

const errorHandler = (req, res, next) => {
  const checkingKeys = errorRouter[req.path];
  const user = JSON.parse(req.body.user);
  const keys = Object.keys(user);

  const missingKeys = checkingKeys.filter(key => !keys.includes(key));

  const responesObj = {
    status: "error",
    error: `${missingKeys.join(", ")} missing`
  };
  if (missingKeys.length > 0) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.write(JSON.stringify(responesObj));
    res.end();
  } else next();
};

module.exports = errorHandler;
