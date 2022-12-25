const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {pageTitle: 'Add New Product', path: '/admin/add-product'})
}

exports.PostNewProduct =  (req, res, next) => {
    const product =  new Product(req.body.title);
    product.save()
    res.redirect('/');
};

exports.getProductList = (req, res, next) => {
     Product.fetchAll(products => {
        res.render('shop/product-list', {pageTitle: 'Product List', products, path: '/'})
     })
}