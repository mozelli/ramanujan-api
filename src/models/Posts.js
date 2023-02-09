const mongoose = require("../database/mongoose");

const PostsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: "João Mozelli Neto"
  },
  category: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    default: "published",
  },
  tags: {
    type: [String],
    require: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Posts = mongoose.model("Posts", PostsSchema);

module.exports = Posts;