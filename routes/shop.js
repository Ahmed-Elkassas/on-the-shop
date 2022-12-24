const express = require('express');

const router = express.Router();
const { getProductList } = require('../controllers/products')

router.get('/', getProductList)

module.exports = router;