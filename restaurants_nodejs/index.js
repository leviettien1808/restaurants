const path = require("path");

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorsController = require("./controllers/errors");
const sequelize = require("./util/database");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("combined"));
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorsController.get404Page);

sequelize
  .sync()
  .then((result) => {
    app.listen(8000);
  })
  .catch((err) => {
    console.log("🚀 ~ err:", err);
  });
