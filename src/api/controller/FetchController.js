const Campaign = require("../models/Campaign");

exports.GetCampaigns = async (req, res) => {
  const data = await Campaign.find({});

  return res.json(data);
};

exports.GetBestCampaign = async (req, res) => {
  const country = req.params.country.toUpperCase();
  const data = await Campaign.find({ country: country || "" })
    .sort("bid.cost")
    .limit(1);

  return res.json(data);
};

exports.CreateCampaign = async (req, res) => {
  const data = await Campaign.create(req.body);

  return res.json(data);
};
