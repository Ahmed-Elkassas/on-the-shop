const express = require('express');

const router = express.Router();


router.get('/', (req, res, next) => {
    res.render('shop/product-list', {pageTitle: 'Product List'})
})

module.exports = router;