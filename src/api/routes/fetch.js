const FetchController = require("../controller/FetchController");
const express = require("express");
const routes = express.Router();

routes.get("/fetch/:country", FetchController.getBestCampaign);
routes.get("/fetch", FetchController.getCampaigns);
routes.post("/fetch", FetchController.sendCampaign);

module.exports = routes;
