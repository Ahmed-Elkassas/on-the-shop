const express = require('express');

const router = express.Router();

const {getAddProduct, PostNewProduct, getProducts, getEditProduct, postEditProduct, postDeleteProduct} = require('../controllers/products');
const { deleteProduct } = require('../models/product');

router.get('/add-product', getAddProduct);

router.get('/products', getProducts)

router.post('/add-product', PostNewProduct);

router.get('/edit-product/:productId', getEditProduct);

router.post('/edit-product', postEditProduct);

router.post('/delete-product', postDeleteProduct)

exports.routes = router
