const User = require("../models/User");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.auth = async (req, res, next) => {
  const { firstname, lastname, email, avatar } = req.body.data;

  try {
    const user = await User.find({ email: email });
    console.log(user[0].id);
    if (user.length > 0) {
      const token = jwt.sign({ email: email, id: user[0].id }, process.env.SECRET_KEY);
      res.status(201).json({ user: user[0], token: token });
    } else {
      const createUser = await User.create({ firstname: firstname, lastname: lastname, email: email, avatar: avatar });
      res.status(201).json({ token: 9890 });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports.loadUser = async (req, res, next) => {};
