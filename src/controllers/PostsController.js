const Posts = require('../models/Posts');
const Categories = require('../models/Categories');

module.exports = {
  async createPost(request, response) {
    const {title, content, category, status, tags, featuredImgURL} = request.body;

    try {
      const newPost = await Posts.create({
        title,
        category,
        tags, 
        state: status,
        text: content,
        featuredImage: featuredImgURL
      });
      return response.status(201).json(newPost);
    } catch (error) {
      return response.status(500).json(error);
    }
  },

  async listPosts(request, response) {
    try {
      const postsList = await Posts.find().sort("-createdAt");
      return response.status(200).json(postsList);
    } catch (error) {
      return response.status(500).json(error);
    }
  },
  
  async createCategory(request, response) {
    const [name, ascending] = request.body;

    try {
      const newCategory = await Categories.create({
        name,
        ascending
      });
      return response.status(201).json(newCategory);
    } catch(error) {
      return response.status(500).json(error);
    }
  }
}