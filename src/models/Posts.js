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
    required: "none",
  },
  text: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    default: "Rascunho",
  },
  tags: {
    type: [String],
    require: false,
  },
  featuredImage: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

const Posts = mongoose.model("Posts", PostsSchema);

module.exports = Posts;