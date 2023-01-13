const Cart = require("../models/cart");
const Product = require("../models/product");

exports.getProductList = (req, res, next) => {
  Product.fetchAll().then((products) => {
  res.render("shop/product-list", {
    pageTitle: "Product List",
    products,
    path: "/products",
    });
  }).catch(error => console.log(error))
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findById(productId).then((product) => {
    res.render("shop/product-detail", {
      product: product,
      pageTitle: product.title,
      path: "/products",
    });
  }).catch(err => alert(err));
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll().then(products => {
    res.render("shop/index", {
      products,
      pageTitle: "Shop",
      path: "/",
    })
}).catch(error => console.log(error));
};

exports.getCartList = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = [];
      for(let product of products) {
        const cartProductData = cart.products.find(item => item.id === product.id);
        if(cartProductData) {
          cartProducts.push({productData: product, qty: cartProductData.qty});
        }
      }
    res.render("shop/cart", { pageTitle: "Your Cart", path: "/cart", products: cartProducts });
    })
  })
};

exports.postCart = (req, res, next) => {
  const productId = req.body.productId;
  Product.findById(productId, (product) => {
    Cart.addProduct(productId, product.price);
  });
  res.redirect("/cart");
};

exports.deleteCartProduct = (req, res, next) => {
  const productId = req.body.productId;
  Product.findById(productId, (product) => {
    Cart.deleteProduct(productId, product.price);
    res.redirect('/cart')
  })
}
