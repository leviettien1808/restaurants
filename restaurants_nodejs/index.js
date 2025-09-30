const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const adminRoutes = require("./routes/admin");

const app = express();

app.use(morgan("combined"));
app.use(bodyParser.urlencoded());
app.use(adminRoutes);

app.listen(8000);
