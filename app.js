const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const { routes } = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const { getError } = require("./controllers/errors");
// const Product = require("./models/product");
// const User = require("./models/user");
const {mongoConnect} = require("./util/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", routes);

app.use(shopRoutes);

app.use(getError);

// Product.belongsTo(User, {constrains: true, onDelete: 'CASCADE'});
// User.hasMany(Product);

// sequelize
//   // .sync({force: true})
//   .sync()
//   .then((result) => {
//    return User.findByPk(1);
//   }).then(user => {
//     if(!user) {
//       return User.create({name: 'Ahmed', email: 'ahmed@test.com', })
//     }
//     return user;
//   }).then((user) => {
//     console.log(user);
//     app.listen(3300)
//   })
//   .catch((err) => console.log(err));


mongoConnect(() => {
  app.listen(3300);
})