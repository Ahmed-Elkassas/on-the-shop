const path = require('path')

const express = require('express');
const bodyParser = require('body-parser')

const {routes} = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { getError } = require('./controllers/errors');
const db = require('./util/database')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// db.execute('SELECT * FROM products').then(
//     result => {
//         console.log(result);
//     }
// ).catch(error => console.log(error))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', routes);

app.use(shopRoutes);

app.use(getError)

app.listen(3300);