const routes = require('express').Router();

const PostsController = require("../controllers/PostsController");

routes.get("/", (request, response) => PostsController.teste(request, response));

module.exports = { routes };