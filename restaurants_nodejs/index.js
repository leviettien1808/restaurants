const path = require("path");

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorsController = require("./controllers/errors");

const app = express();

app.set("view engine", "ejs");

app.use(morgan("combined"));
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorsController.get404Page);

app.listen(8000);
