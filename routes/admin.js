const express = require('express');

const router = express.Router();

const {getAddProduct, PostNewProduct, getProducts, getEditProduct, postEditProduct} = require('../controllers/products');

router.get('/add-product', getAddProduct);

router.get('/products', getProducts)

router.post('/add-product', PostNewProduct);

router.get('/edit-product/:productId', getEditProduct);

router.post('/edit-product', postEditProduct)

exports.routes = router
