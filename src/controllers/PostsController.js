const Posts = require('../models/Posts');

module.exports = {
  async createPost(request, response) {
    const {title, content, category, status, tags} = request.body;

    try {
      const newPost = await Posts.create({
        title,
        category,
        tags, 
        state: status,
        text: content
      });
      return response.status(201).json(newPost);
    } catch (error) {
      return response.json(error);
    }
  }
}