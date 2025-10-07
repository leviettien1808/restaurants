const path = require("path");

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorsController = require("./controllers/errors");
const sequelize = require("./util/database");
const Product = require("./models/products");
const User = require("./models/users");
const Order = require("./models/Orders");
const OrderItem = require("./models/order-item");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("combined"));
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorsController.get404Page);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });
Product.belongsToMany(Order, { through: OrderItem });

sequelize
  .sync()
  .then((result) => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "Tien", email: "test@test.com" });
    }
    return user;
  })
  .then((user) => {
    app.listen(8000);
  })
  .catch((err) => {
    console.log("🚀 ~ err:", err);
  });
