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
  const product = new Product({
    title, price, description, imgUrl, userId: req.user
  });
  product
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  //** Important: The extracted value always is a string! so "true" instead of true.
  const editMode = req.query.edit;
  if (!editMode) res.redirect("/");
  const productId = req.params.productId;
  Product.findById(productId)
    .then((product) => {
      if (!productId) res.redirect("/");
      res.render("admin/edit-product", {
        pageTitle: "Add New Product",
        path: "/admin/edit-product",
        editing: editMode,
        product,
      });
    })
    .catch((error) => console.log(error));
};

exports.postEditProduct = (req, res, next) => {
  const productId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImgUrl = req.body.imgUrl;
  const updatedDescription = req.body.description;
 
  Product.findById(productId).then((product) => {
    product.title = updatedTitle;
    product.price = updatedPrice;
    product.imgUrl = updatedImgUrl;
    product.description = updatedDescription;
    return product.save()
  }).then((result) => {
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.find()
    .then((products) => {
      res.render("admin/products", {
        products,
        pageTitle: "Admin Products",
        path: "/admin/products",
      });
    })
    .catch((error) => console.log(error));
};

exports.postDeleteProduct = (req, res, next) => {
  const productId = req.body.productId;
  Product.findOneAndRemove(productId)
    .then(() => res.redirect("/admin/products"))
    .catch((error) => console.log(error));
};
