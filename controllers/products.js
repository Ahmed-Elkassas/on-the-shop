
const products = [];

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {pageTitle: 'Add New Product'})
}

exports.PostNewProduct =  (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
};

exports.getProductList = (req, res, next) => {
    res.render('shop/product-list', {pageTitle: 'Product List', products})
}