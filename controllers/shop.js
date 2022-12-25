const Product = require("../models/product");

exports.getCartList = (req, res, next) => {
    res.render('shop/cart', {pageTitle: 'Your Cart', path: 'cart'})
}

exports.getProductList = (req, res, next) => {
    Product.fetchAll(products => {
       res.render('shop/product-list', {pageTitle: 'Product List', products, path: '/'})
    })
}