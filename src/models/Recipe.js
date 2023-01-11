const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
  idMeal: {
    type: String,
    required: true
  },
  strMeal: {
    type: String,
    required: true
  },
  strArea: {
    type: String,
    required: true,
    unique: true
  },
  strCategory: {
    type: String,
    required: true
  },
  strMealThumb: {
    type: String,
    required: true
  },
  ingredients: [{ ingredient: String, measure: String }]
});

module.exports = mongoose.model("Recipes", RecipeSchema);
