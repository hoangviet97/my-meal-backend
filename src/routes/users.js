const express = require("express");
const User = require("../models/User");
const { auth, loadUser } = require("../controllers/UserController");
const tokenAuth = require("../middlewares/tokenAuthorization");

const router = express.Router();

router.post("/auth", auth);

router.get("/user", [tokenAuth], loadUser);

module.exports = router;
