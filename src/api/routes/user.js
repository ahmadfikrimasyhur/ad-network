const UserController = require("../controller/UserController");
const express = require("express");
const routes = express.Router();

routes.get("/users", UserController.GetUser); //FOR TESTS

routes.post("/signup", [UserController.CheckEmail], UserController.Signup);
routes.post("/login", UserController.Login);

module.exports = routes;
