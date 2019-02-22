const orderRouter = require("express").Router();
const createOrder = require("./orderRoutes/createOrder");
const getOrder = require("./orderRoutes/getOrder");

orderRouter.post("/", createOrder).get("/:id", getOrder);
module.exports = orderRouter;
