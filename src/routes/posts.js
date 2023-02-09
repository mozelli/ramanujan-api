const routes = require('express').Router();

const PostsController = require("../controllers/PostsController");

routes.post("/create", (request, response) => PostsController.createPost(request, response));

module.exports = { routes };