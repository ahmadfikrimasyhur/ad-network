const UserController = require("../controller/UserController");
const express = require("express");
const routes = express.Router();

routes.get("/users", UserController.GetUser);
routes.post("/users", UserController.CreateUser);

module.exports = routes;
