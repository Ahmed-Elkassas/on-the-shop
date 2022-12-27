const path = require('path');
const fs = require('fs');

const rootDir = require('../util/path');
const { json } = require('body-parser');

const p = path.join(rootDir, 'data', 'cart.json');

module.exports = class Cart {
    static addProduct(id, productPrice) {
        // Fetch the previous cart from products
        fs.readFile(p, (error, fileContent) => {    
            let cart = {products: [], totalPrice: 0};
            if(!error) {
                cart = JSON.parse(fileContent)
            }
            // Analyze the cart => Find the existing product
            const existingProductIdx = cart.products.findIndex(item => item.id === id);
            const existingProduct = cart.products[existingProductIdx]
            let updatedProduct;
            // Add new product/ increase quantity
            if(existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products]
                cart.products[existingProductIdx] = updatedProduct
            } else {
                updatedProduct = {id: id, qty: 1};
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), error => {
                console.log(error)
            })
        })
    }

    static deleteProduct(id, productPrice) {
        fs.readFile(p, (error, fileContent) => {
            if(error) {
                return;
            }
            const updatedCart = {...JSON.parse(fileContent)};
            const product = updatedCart.products.find(item => item.id === id);
            const productQty = product.qty;
            updatedCart.products = updatedCart.products.filter((item) => item.id !== id);
            updatedCart.totalPrice = updatedCart.totalPrice - productPrice * productQty;
            fs.writeFile(p, JSON.stringify(updatedCart), error => {
                console.log(error)
            })
        })
    }

    static getCart(cb) {
        fs.readFile(p, (error, fileContent) => {
            const cart = JSON.parse(fileContent);
            if(error) {
                cb(null);
            } else {
                cb(cart);
            }
        })
    }

}