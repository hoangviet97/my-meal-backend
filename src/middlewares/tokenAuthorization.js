const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");

  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "No token found" });
  }

  try {
    jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
      if (error) return res.status(401).json({ message: "Unvalid token" });

      req.user = decoded;

      next();
    });
  } catch (err) {
    return res.status(500).json({ message: "Something went wrong!" });
  }
};
