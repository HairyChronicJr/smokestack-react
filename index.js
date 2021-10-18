const express = require('express');
const path = require('path');
const passport = require('passport');
const config = require('./config');

const recipeRouter = require('./routes/recipeRouter');
const usersRouter = require('./routes/users');

const mongoose = require('mongoose');

const url = config.mongoUrl;
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

connect.then(() => console.log('Connected correctly to server'), 
    err => console.log(err)
);

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use('/api/recipes', recipeRouter);
app.use('/users', usersRouter);

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);