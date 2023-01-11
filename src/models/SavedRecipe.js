const mongoose = require("mongoose");

const SavedRecipeSchema = mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users"
  },
  recipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipes"
  },
  date: {
    type: Date,
    required: false
  }
});

module.exports = mongoose.model("SavedRecipe", SavedRecipeSchema);
