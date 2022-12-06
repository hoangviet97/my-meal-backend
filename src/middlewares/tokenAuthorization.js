const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  if (token) res.status(401).json({ message: "Unauthorized access" });

  try {
    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
      if (error) return res.status(401).json({ message: "Unvalid token" });

      req.user = decoded.user;
      next();
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
