const express = require('express');
const storeRouter = express.Router();

const storeItems = require('../data/storeItems');

storeRouter.route('/')
.get((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(storeItems.STOREITEMS);
});

storeRouter.route('/carousel')
.get((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(storeItems.CAROUSELITEMS);
});

module.exports = storeRouter;