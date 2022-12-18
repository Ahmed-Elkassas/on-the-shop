const express = require('express');

const router = express.Router();


router.get('/add-product', (req, res, next) => {
    res.render('/admin/add-product', {pageTitle: 'Add New Product'})
})