const express = require('express');

const router = express.Router();

const {getAddProduct, PostNewProduct, getProducts} = require('../controllers/products');

router.get('/add-product', getAddProduct);

router.get('/products', getProducts)

router.post('/add-product', PostNewProduct)

exports.routes = router
