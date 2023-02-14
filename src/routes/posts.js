const routes = require('express').Router();

const PostsController = require("../controllers/PostsController");

routes.post("/create", (request, response) => PostsController.createPost(request, response));

routes.get("/list", (request, response) => PostsController.listPosts(request, response));

routes.post("/category/create", (request, response) => PostsController.createCategory(request, response));

module.exports = { routes };