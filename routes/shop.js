const express = require('express');

const router = express.Router();
const { getProductList, getCartList, getIndex } = require('../controllers/shop')

router.get('/', getIndex)

router.get('/cart', getCartList)

router.get('/products', getProductList)

module.exports = router;        