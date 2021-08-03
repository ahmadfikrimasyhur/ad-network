const User = require("../models/User");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

exports.Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).send({ auth: false, message: "User not found!" });
    }

    if (password !== user.password) {
      return res.status(401).send({
        auth: false,
        message: "Wrong password!",
      });
    }

    const token = jwt.sign({ id: user.id }, secret, {
      expiresIn: 86400,
    });

    return res.status(200).send({
      auth: true,
      id: user._id,
      username: user.username,
      email: user.email,
      accessToken: token,
    });
  } catch (err) {
    return res.status(401).send({ auth: false, message: err });
  }
};

exports.Signup = async (req, res) => {
  const data = await User.create(req.body);

  if (data) {
    return res.status(200).send(data);
  } else {
    return res
      .status(400)
      .send({ error: true, message: "Could not create user" });
  }
};

exports.CheckEmail = async (req, res, next) => {
  try {
    const email = await User.findOne({ email: req.body.email });

    if (email) {
      return res
        .status(400)
        .send({ error: true, message: "Email already exists!" });
    }
  } catch (err) {
    return res.status(500).send({ error: true, message: err });
  }
  next();
};

exports.GetUser = async (req, res) => {
  const data = await User.find({});

  return res.json(data);
};
