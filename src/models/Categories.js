const mongoose = require("../database/mongoose");

const CategoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ascending: {
    type: String,
    default: ""
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

const Categories = mongoose.model("Categories", CategoriesSchema);

module.exports = Categories;