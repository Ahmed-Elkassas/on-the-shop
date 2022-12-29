const db = require("../util/database");
const Cart = require("./cart");

module.exports = class Product {
  constructor(id, title, imgUrl, price, description) {
    this.id = id;
    this.title = title;
    this.imgUrl = imgUrl;
    this.price = price;
    this.description = description;
  }

  save() {
    return db.execute('INSERT INTO products (title, price, imgUrl, description) VALUES (?, ?, ?, ?)', 
    [this.title, this.price, this.imgUrl, this.description]
  )
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products')
  }

  static deleteProduct(id) {
    
  }
};
