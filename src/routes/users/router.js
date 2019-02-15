const express = require("express");
const userRouter = express.Router();
const createUser = require('./usersRoutes/createUser');
const getUserById = require('./usersRoutes/getUserByID');
const updateUser = require('./usersRoutes/updateUser');

userRouter
    .post('/', createUser)
    .get('/:id', getUserById)
    .put('/:id', updateUser);

module.exports = userRouter;