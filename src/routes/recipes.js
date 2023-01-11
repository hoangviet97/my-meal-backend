const express = require("express");
const { save, getSavedRecipes } = require("../controllers/RecipeController");
const tokenAuth = require("../middlewares/tokenAuthorization");

const router = express.Router();

router.post("/save", [tokenAuth], save);
router.get("/saved-recipes", [tokenAuth], getSavedRecipes);

module.exports = router;
