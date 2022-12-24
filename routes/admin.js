const express = require('express');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('admin/add-product', {pageTitle: 'Add New Product'})
})

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title });
    res.redirect('/')
})

exports.routes = router
exports.products = products;
