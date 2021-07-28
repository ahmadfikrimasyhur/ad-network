const FetchController = require("../controller/FetchController");
const express = require("express");
const routes = express.Router();

routes.get("/fetch", FetchController.GetCampaigns);
routes.post("/fetch", FetchController.CreateCampaign);

routes.get("/fetch/:country", FetchController.GetBestCampaign);

module.exports = routes;
