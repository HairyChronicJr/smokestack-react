const express = require('express');
const path = require('path');

const recipeRouter = require('./routes/recipeRouter');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api/recipes', recipeRouter);

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);