const express = require('express');

const router = express.Router();

const {getAddProduct, PostNewProduct, getProducts, getEditProduct} = require('../controllers/products');

router.get('/add-product', getAddProduct);

router.get('/products', getProducts)

router.post('/add-product', PostNewProduct);

router.get('/edit-product/:productId', getEditProduct)

exports.routes = router
