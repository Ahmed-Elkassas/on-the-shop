const express = require('express');

const router = express.Router();

const {products} = require('./admin');


router.get('/', (req, res, next) => {
    res.render('shop/product-list', {pageTitle: 'Product List', products})
})

module.exports = router;