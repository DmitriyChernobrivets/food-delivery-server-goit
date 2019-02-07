const defaultRoute = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<h1>WELCOME TO ${req.url} ROUTE<h1>`);
  res.end();
};

module.exports = defaultRoute;
