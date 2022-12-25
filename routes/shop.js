const express = require('express');

const router = express.Router();
const { getProductList, getCartList, getIndex, getProduct, postCart } = require('../controllers/shop')

router.get('/', getIndex)

router.get('/products', getProductList)

router.get('/products/:productId', getProduct)

router.get('/cart', getCartList);

router.post('/cart', postCart)

module.exports = router;        