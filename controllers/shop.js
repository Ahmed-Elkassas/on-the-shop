const Product = require("../models/product");

exports.getProductList = (req, res, next) => {
    Product.fetchAll(products => {
       res.render('shop/product-list', { pageTitle: 'Product List', products, path: '/' })
    })
}

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId, (product) => {
    res.render('shop/product-detail', {product, pageTitle: product.title, path: '/products'})
  })
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('shop/index', {
        products,
        pageTitle: 'Shop',
        path: '/'      
      });
    });
  };

exports.getCartList = (req, res, next) => {
    res.render('shop/cart', { pageTitle: 'Your Cart', path: 'cart' })
}

exports.postCart = (req, res, next) => {
  const productId = req.body.productId;
  console.log(productId)
}