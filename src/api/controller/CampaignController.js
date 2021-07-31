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
  try {
    const data = await Campaign.create({
      country: req.body.country,
      name: req.body.name,
      conversion: req.body.conversion,
      bid: {
        currency: req.body.currency,
        cost: req.body.bid,
      },
    });
    return res.json(data);
  } catch (err) {
    return res.status(400).json(err);
  }
};
