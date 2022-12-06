const express = require("express");
const User = require("../models/User");
const { auth, loadUser } = require("../controllers/UserController");

const router = express.Router();

router.post("/auth", auth);

router.get("/user", loadUser);

module.exports = router;
