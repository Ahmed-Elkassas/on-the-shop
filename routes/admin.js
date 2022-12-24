const express = require('express');

const router = express.Router();

const {getAddProduct, PostNewProduct} = require('../controllers/products');

router.get('/add-product', getAddProduct)

router.post('/add-product', PostNewProduct)

exports.routes = router
