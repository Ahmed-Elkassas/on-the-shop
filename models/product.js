const fs = require("fs");
const path = require("path");

const rootDir = require("../util/path");
const Cart = require("./cart");

const p = path.join(rootDir, "data", "products.json");

const getProductFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(id, title, imgUrl, price, description) {
    this.id = id;
    this.title = title;
    this.imgUrl = imgUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    getProductFromFile((products) => {
      if (this.id) {
        const existingProductIdx = products.findIndex(
          (item) => item.id === this.id
        );
        const updateProducts = [...products];
        updateProducts[existingProductIdx] = this;
        fs.writeFile(p, JSON.stringify(updateProducts), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (err) => {
          console.log(err);
        });
      }
    });
  }

  static fetchAll(cb) {
    getProductFromFile(cb);
  }

  static findById(id, cb) {
    getProductFromFile((prodcuts) => {
      const product = prodcuts.find((product) => product.id === id);
      cb(product);
    });
  }

  static deleteProduct(id) {
    getProductFromFile((products) => {
        const existingProduct = products.find(product => product.id === id)
        const UpdatedProducts = products.filter((product) => product.id !== id);
        fs.writeFile(p, JSON.stringify(UpdatedProducts), err => {
            if(!err) {
                Cart.deleteProduct(id, existingProduct.price)
            }
        })
      });
  }
};
