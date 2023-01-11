const Recipe = require("../models/Recipe");
const SavedRecipe = require("../models/SavedRecipe");
const mongoose = require("mongoose");
require("dotenv").config();

module.exports.save = async (req, res, next) => {
  const { idMeal, strMeal, strArea, strCategory, strMealThumb, ingredients } = req.body.data;

  try {
    const searchRecipe = await Recipe.find({ idMeal: idMeal });

    if (searchRecipe.length < 1) {
      const newRecipe = await Recipe.create({ idMeal: idMeal, strMeal: strMeal, strArea: strArea, strCategory: strCategory, strMealThumb: strMealThumb, ingredients: ingredients });
      const saveRecipe = await SavedRecipe.create({ owner: req.user.id, recipe: newRecipe.id });
    } else {
      console.log("exist");
      res.status(500).json({ message: "Recipe exists" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong!" });
  }
};

module.exports.getSavedRecipes = async (req, res, next) => {
  try {
    const recipes = await SavedRecipe.find().populate("recipe");
    res.status(201).json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
