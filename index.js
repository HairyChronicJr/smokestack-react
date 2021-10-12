const express = require('express');
const path = require('path');

const recipes = require('./data/recipes');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/getRecipes', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(recipes);
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);