const mysql = require('mysql2');

// create multiple connections
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'shop-cart',
    password: 'sql@123'
});

module.exports = pool.promise();