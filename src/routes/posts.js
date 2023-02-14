const routes = require('express').Router();

const PostsController = require("../controllers/PostsController");

routes.post("/create", (request, response) => PostsController.createPost(request, response));

routes.get("/list", (request, response) => PostsController.listPosts(request, response));

routes.post("/category/create", (request, response) => PostsController.createCategory(request, response));

routes.get("/category/list", (request, response) => PostsController.listCategories(request, response));

routes.put("/category/:id", (request, response) => PostsController.updateCategory(request, response));

routes.delete("/category/:id", (request, response) => PostsController.deleteCategory(request, response));

module.exports = { routes };