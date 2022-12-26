const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {pageTitle: 'Add New Product', path: '/admin/add-product'})
}

exports.PostNewProduct =  (req, res, next) => {
    const title = req.body.title;
    const imgUrl = req.body.imgUrl
    const price = req.body.price;
    const description = req.body.description;
    const product =  new Product(title, imgUrl, price, description );
    product.save()
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('admin/products', {
        products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    });
  };
  