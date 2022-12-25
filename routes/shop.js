const express = require('express');

const router = express.Router();
const { getProductList, getCartList } = require('../controllers/shop')

router.get('/cart', getCartList)

router.get('/', getProductList)

module.exports = router;