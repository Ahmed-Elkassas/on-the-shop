const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add New Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.PostNewProduct = (req, res, next) => {
  const title = req.body.title;
  const imgUrl = req.body.imgUrl;
  const price = req.body.price;
  const description = req.body.description;
  Product.create({
    title: title,
    price: price,
    imgUrl: imgUrl,
    description: description
  }).then((result) => {
      console.log(result);
  }).catch((err) => {
    console.log(err)
  });
  
};

exports.getEditProduct = (req, res, next) => {
  //** Important: The extracted value always is a string! so "true" instead of true.
  const editMode = req.query.edit;
  if (!editMode) res.redirect("/");
  const productId = req.params.productId;
  Product.findById(productId, (product) => {
    if (!productId) res.redirect("/");
    res.render("admin/edit-product", {
      pageTitle: "Add New Product",
      path: "/admin/edit-product",
      editing: true,
      product,
    });
  });
};

exports.postEditProduct = (req, res, next) => {
  const productId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImgUrl = req.body.imgUrl;
  const updatedDescription = req.body.description;
  const updatedProduct = new Product(
    productId,
    updatedTitle,
    updatedImgUrl,
    updatedPrice,
    updatedDescription
  );
  updatedProduct.save();
  res.redirect("/admin/products");
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("admin/products", {
      products,
      pageTitle: "Admin Products",
      path: "/admin/products",
    });
  });
};

exports.postDeleteProduct = (req, res, next) => {
  const productId = req.body.productId;
  Product.deleteProduct(productId);
  res.redirect("/admin/products");
};
