const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const UserRouter = require("./routes/users");
const RecipeRouter = require("./routes/recipes");

const app = express();
const PORT = 5500;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://phav02:dobroviz192@cluster0.z6dngx8.mongodb.net/?retryWrites=true&w=majority");
    console.log("Connected to mongodb...");
  } catch (error) {
    console.log(error);
  }
};

app.use("/api", UserRouter);
app.use("/api", RecipeRouter);

dbConnect();

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("Server is running...");
});
