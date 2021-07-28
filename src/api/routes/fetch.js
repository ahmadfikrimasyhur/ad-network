const FetchController = require("../controller/FetchController");
const express = require("express");
const routes = express.Router();

routes.get("/fetch/:country", FetchController.GetCampaigns);
routes.get("/fetch", FetchController.GetBestCampaign);
routes.post("/fetch", FetchController.CreateCampaign);

module.exports = routes;
