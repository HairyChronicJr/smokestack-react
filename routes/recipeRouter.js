const express = require('express');
const recipeRouter = express.Router();

const recipes = require('../data/recipes');

recipeRouter.route('/')
.get((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(recipes);
});

module.exports = recipeRouter;