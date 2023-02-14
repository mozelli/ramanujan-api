const { v4 } = require('uuid');
const mongoose = require("../database/mongoose");

const CategoriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: false,
    default: v4()
  },
  ascending: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  status: {
    type: String,
    default: "active"
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

const Categories = mongoose.model("Categories", CategoriesSchema);

module.exports = Categories;