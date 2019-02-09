const errorHandler = err => {
  if (err) throw new Error("Error : ", err);
  else console.log("user created");
};

module.exports = errorHandler;
