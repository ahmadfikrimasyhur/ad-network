const UserController = require("../controller/UserController");
const CampaignController = require("../controller/CampaignController");

const express = require("express");
const routes = express.Router();

routes.get("/users", UserController.GetUser);
routes.get("/fetch", CampaignController.GetCampaigns);

module.exports = routes;
