const Sequelize = require('sequelize');

const sequelize = new Sequelize('shop-cart', 'root', 'sql@123', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;