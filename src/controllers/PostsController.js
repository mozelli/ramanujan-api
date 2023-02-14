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
    const { name, slug, ascending, description } = request.body;

    try {
      const newCategory = await Categories.create({
        name,
        slug,
        ascending,
        description
      });
      return response.status(201).json(newCategory);
    } catch(error) {
      return response.status(500).json(error);
    }
  },

  async listCategories(request, response) {
    try {
      const categoriesList = await Categories.find().sort("createdAt");
      return response.status(200).json(categoriesList);
    } catch (error) {
      return response.status(500).json(error);
    }
  },

  async updateCategory(request, response) {
    const id = request.params.id;
    const data = request.body;
    try {
      const category = await Categories.findByIdAndUpdate(id, data);
      response.status(201).json(category);
    } catch(error) {
      response.status(500).json(error);
    }
  },
  async deleteCategory(request, response) {
    const id = request.params.id;
    try {
      const category = await Categories.findByIdAndRemove(id);
      response.status(201).json(category);
    } catch(error) {
      console.log(error);
      response.json(500).json(error);
    }
  }
}