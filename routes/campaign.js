const CampaignController = require("../controller/CampaignController");
const express = require("express");
const routes = express.Router();

routes.get("/fetch/:country", CampaignController.GetBestCampaign);

routes.get(
  "/campaign/:id",
  [CampaignController.CheckToken],
  CampaignController.GetUserCampaigns
);
routes.post(
  "/campaign/create",
  [CampaignController.CheckToken],
  CampaignController.CreateCampaign
);
routes.delete(
  "/campaign/delete",
  [CampaignController.CheckToken],
  CampaignController.DeleteCampaign
);

module.exports = routes;
