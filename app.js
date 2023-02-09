const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const { routes } = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { getError } = require("./controllers/errors");
// const Product = require("./models/product");
// const User = require("./models/user");
const {mongoConnect} = require("./util/database");
const mongoose = require('mongoose');
const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById('63e5117e199532f891ef560a').then(user => {
    req.user = user;
    next();
  }).catch(error => {
    console.log(error)
  })
  // next()
});

app.use("/admin", routes);

app.use(shopRoutes);

app.use(getError);

mongoose.set('strictQuery', true);
mongoose
  .connect(
    'mongodb://ahmedelkassas:MongNextjs123ahmed@ac-w8xrvor-shard-00-00.n98lkzf.mongodb.net:27017,ac-w8xrvor-shard-00-01.n98lkzf.mongodb.net:27017,ac-w8xrvor-shard-00-02.n98lkzf.mongodb.net:27017/?ssl=true&replicaSet=atlas-mq7p1v-shard-0&authSource=admin&retryWrites=true&w=majority')
  .then(result => {
    console.log('connected');
   User.findOne().then(user => {
    if(!user) {
      const user = new User({
        name: 'Ahmed',
        email: 'ahmed@test.com',
        cart: {
          items: []
        }
      });
      user.save();
    }
   }) 
    app.listen(3300);
  })
  .catch(err => {
    console.log(err);
  });
