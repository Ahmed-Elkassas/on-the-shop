const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    res.render('admin/edit-product', {pageTitle: 'Add New Product', path: '/admin/add-product'})
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

exports.getEditProduct = (req, res, next) => {
  //** Important: The extracted value always is a string! so "true" instead of true.
  const editMode = req.query.edit;
  if(!editMode) res.redirect('/');
  res.render('admin/edit-product', {pageTitle: 'Add New Product', path: '/admin/edit-product', editing: true})
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
      res.render('admin/products', {
        products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
      });
    });
  };
  