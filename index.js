const express = require('express');
const path = require('path');
const passport = require('passport');
const config = require('./config');

const recipeRouter = require('./routes/recipeRouter');
<<<<<<< HEAD
const storeRouter = require('./routes/storeRouter');
=======
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
>>>>>>> 039ca6f94f9f632028a847103a532e431e407edb

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use('/api/recipes', recipeRouter);
<<<<<<< HEAD
app.use('/api/store', storeRouter);
=======
app.use('/users', usersRouter);

app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
}); 

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
>>>>>>> 039ca6f94f9f632028a847103a532e431e407edb

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

module.exports = app;