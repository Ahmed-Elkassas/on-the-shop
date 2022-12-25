const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path')

const p = path.join(rootDir, 'data', 'products.json');

const getProductFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
         return cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
     });
}

module.exports = class Product {
    constructor(title, imgUrl, price, description) {
        this.title = title;
        this.imgUrl = imgUrl; 
        this.price = price;
        this.description = description;
    }

    save() {
        getProductFromFile(products => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
              });
        })  
    }

    static fetchAll(cb) {
        getProductFromFile(cb)
    }
}