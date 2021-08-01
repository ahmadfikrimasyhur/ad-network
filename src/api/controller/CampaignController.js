const Campaign = require("../models/Campaign");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

exports.GetCampaigns = async (req, res) => {
  const data = await Campaign.find({});

  return res.json(data);
};

exports.CheckToken = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    next();
  });
};

exports.GetUserCampaigns = async (req, res) => {
  const _id = req.params.id;
  const data = await Campaign.find({ owner: _id });

  return res.json(data);
}; //TEST ROUTE

exports.GetBestCampaign = async (req, res) => {
  const country = req.params.country.toUpperCase();
  const data = await Campaign.find({ country: country || "" })
    .sort("bid.cost")
    .limit(1);

  return res.json(data);
};

exports.CreateCampaign = async (req, res) => {
  const user = await User.findById(req.body.id); //what if im logged and authenticated but doing a post in /campaign/create with another id in my req body?

  try {
    const data = await Campaign.create({
      owner: user._id,
      country: req.body.country,
      name: req.body.name,
      conversion: req.body.conversion,
      bid: {
        currency: req.body.currency,
        cost: req.body.cost,
      },
    });
    return res.json(data);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};
