const User = require("../models/User");

exports.CreateUser = async (req, res) => {
  const data = await User.create(req.body);

  return res.json(data);
};

exports.GetUser = async (req, res) => {
  const data = await User.find({});

  return res.json(data);
};
